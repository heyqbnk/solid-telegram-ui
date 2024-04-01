import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * @param name - component name
 * @return {boolean} True, if value is valid component name.
 */
export function isValidComponentName(name) {
  return /^[A-Z][a-zA-Z\d]*$/.test(name);
}

/**
 * @param name - component name.
 * @return {string} CSS class name.
 */
export function classNameFromComponent(name) {
  return 'tgui-' + name[0].toLowerCase() + name.slice(1).replace(/(A-Z)/g, '-$1');
}

/**
 * @return {string} Absolute components directory.
 */
export function getComponentsDir() {
  return resolve(dirname(fileURLToPath(import.meta.url)), '../src/components');
}

/**
 * @param {string} name - component name.
 * @return {string} Content of file responsible for component styles.
 */
export function getComponentSCSSFileContent(name) {
  return `@use "../../scss/palette" as palette;
    
$block: "${classNameFromComponent(name)}";

.#{$block} {
}
`;
}

/**
 * @param {string} name - component name
 * @return {string} Content of file responsible for Solid.js component implementation.
 */
export function getComponentSolidFileContent(name) {
  return `import { mergeProps } from 'solid-js';

import { withConfig, type WithConfigComponent } from '~/hocs/withConfig.js';

import { bemcn } from '~/styles/bemcn.js';
import { createClasses } from '~/styles/createClasses.js';
import { styled } from '~/styles/styled.js';
    
import type { ${name}Props, ${name}Defaults } from './${name}.types.js';

import './${name}.scss';
    
const block = bemcn('${classNameFromComponent(name)}');

export const ${name}: WithConfigComponent<${name}Props> = withConfig(
  styled((props: ${name}Props) => {
    const merged = mergeProps({} satisfies ${name}Defaults, props);
    const classes = createClasses(merged);
    
    return (
      <div class={classes().root}></div>
    );
  }, {
    root: block.calc(),
  }),
);
`;
}

/**
 * @param {string} name - component name
 * @return {string} Content of file responsible for Solid.js component typings.
 */
export function getComponentTypesFileContent(name) {
  return `import type { WithConfig } from '~/types/known.js';
import type { RequiredBy } from '~/types/utils.js';

import type { WithOptionalClasses } from '~/styles/types.js';

/**
 * ${name} component element keys allowed to be customized.
 */
export type ${name}ElementKey = 'root';

/**
 * ${name} component properties, having defaults.
 */
export interface ${name}Defaults {}

/**
 * ${name} component public properties.
 */
export interface ${name}Props 
  extends WithConfig, 
    ${name}Defaults, 
    WithOptionalClasses<${name}ElementKey, ${name}ClassesProps> {}
    
/**
 * ${name} component properties passed to the classes hooks.
 */
export interface ${name}ClassesProps extends RequiredBy<${name}Props, keyof ${name}Defaults> {
}
`;
}