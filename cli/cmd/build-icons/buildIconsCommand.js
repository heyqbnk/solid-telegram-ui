// This script optimizes icons, placed in the "icons" folder.

import { Command } from 'commander';
import { optimize } from 'svgo';
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { resolve, parse } from 'node:path';
import { createWithLog, getRootDir, useTemplate } from '../../utils.js';

export const buildIconsCommand = new Command('build-icons');

buildIconsCommand
  .action(() => {
    const svgIconsDir = resolve(getRootDir(), 'icons');
    const solidIconsDir = resolve(getRootDir(), 'src/icons');

    // If icons dir doesn't exist, create it.
    if (!existsSync(solidIconsDir)) {
      mkdirSync(solidIconsDir);
    } else {
      // Otherwise remove all icon components files.
      readdirSync(solidIconsDir).forEach(file => {
        if (file.match(/^[A-Z]/)) {
          rmSync(resolve(solidIconsDir, file));
        }
      });
    }

    // List of collected components names.
    const collectedComponents = [];

    readdirSync(svgIconsDir).forEach(file => {
      const filePath = resolve(svgIconsDir, file);

      // Optimize SVG.
      const { data: svg } = optimize(readFileSync(filePath).toString(), {
        multipass: true,
        plugins: [
          'preset-default',
          'removeDimensions',
          // Replace static colors which were meant to be dynamic to really dynamic.
          // https://svgo.dev/docs/plugins/convert-colors/
          {
            name: 'convertColors',
            params: {
              currentColor: /#007AFF/,
            },
          },
        ],
      });

      // Compute size based on the icon name.
      const [, size] = file.match(/(\d+)\.svg$/).map(Number);

      // Compute component name
      const component = parse(file)
        .name
        .split('_')
        .map(part => part[0].toUpperCase() + part.slice(1))
        .join('');

      // Write optimized svg.
      writeFileSync(filePath, svg);

      // Write Solid component.
      createWithLog(
        resolve(solidIconsDir, `${component}.tsx`),
        useTemplate('IconComponent.tsx', [
          component,
          svg
            .replace(/([{}])/g, '{\'$1\'}')
            .replace(/<!--\s*([\s\S]*?)\s*-->/g, '{/* $1 */}')
            .replace(/(<svg[^>]*)>/i, '$1 width={props.size} height={props.size} {...props}>'),
          size,
        ]),
      );

      collectedComponents.push(component);
    });

    // Write Solid components index file.
    writeFileSync(
      resolve(solidIconsDir, 'index.ts'),
      collectedComponents.map(component => `export * from './${component}.js';\n`)
        .sort()
        .join('') + '\n',
    );
  });
