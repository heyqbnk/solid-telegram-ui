import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync, writeFileSync } from 'node:fs';
import chalk from 'chalk';

const { bold, green } = chalk;

/**
 * @return {string} Project root directory.
 */
export function getRootDir() {
  return resolve(dirname(fileURLToPath(import.meta.url)), '..');
}

/**
 * @param {string} fileName - template file name.
 * @param {string[]} [variables] - list of variables to apply.
 * @return {string} Applied template content.
 */
export function useTemplate(fileName, variables = []) {
  let content = readFileSync(resolve(getRootDir(), 'cli/templates', fileName)).toString();
  variables.forEach((value, idx) => {
    content = content.replaceAll(`$${idx + 1}`, value);
  });
  return content;
}

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
  return resolve(getRootDir(), 'src/components');
}

/**
 * @param {string} name - component name.
 * @return {string} Content of file responsible for component styles.
 */
export function getComponentSCSSFileContent(name) {
  return useTemplate('Component.scss', [classNameFromComponent(name)]);
}

/**
 * @param {string} name - component name
 * @return {string} Content of file responsible for Solid.js component implementation.
 */
export function getComponentSolidFileContent(name) {
  return useTemplate('Component.tsx', [name, classNameFromComponent(name)]);
}

/**
 * @param {string} name - component name
 * @return {string} Content of file responsible for Solid.js component typings.
 */
export function getComponentTypesFileContent(name) {
  return useTemplate('Component.types.ts', [name]);
}

/**
 * @return {string}
 */
export function getCreateIconComponentFileContent() {
  return useTemplate('createIconComponent.tsx');
}

/**
 * @param {string} path - file path.
 * @param {string} content - file content.
 */
export function createWithLog(path, content) {
  writeFileSync(path, content);
  console.log(`${bold('Created file')}: ${green(path)}`);
}