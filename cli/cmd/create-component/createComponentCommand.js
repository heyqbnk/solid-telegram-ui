import { Command } from 'commander';
import { resolve } from 'node:path';
import { existsSync, mkdirSync } from 'node:fs';
import {
  createWithLog,
  getComponentSCSSFileContent,
  getComponentsDir,
  getComponentSolidFileContent,
  getComponentTypesFileContent,
  isValidComponentName,
} from '../../utils.js';

export const createComponentCommand = new Command('create-component');

createComponentCommand
  .argument('<name>', 'Component name, pascal-cased')
  .action((name) => {
    if (!isValidComponentName(name)) {
      throw new Error('Component name is invalid.');
    }

    const targetDir = resolve(getComponentsDir(), name);
    if (existsSync(targetDir)) {
      throw new Error(`Component directory "${targetDir}" already exists.`);
    }

    mkdirSync(targetDir);
    createWithLog(resolve(targetDir, `${name}.scss`), getComponentSCSSFileContent(name));
    createWithLog(resolve(targetDir, `${name}.tsx`), getComponentSolidFileContent(name));
    createWithLog(resolve(targetDir, `${name}.types.ts`), getComponentTypesFileContent(name));
  });
