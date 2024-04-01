import { Command } from 'commander';

import packageJson from '../package.json' assert { type: 'json' };
import { buildIconsCommand } from './buildIconsCommand.js';
import { createComponentCommand } from './createComponentCommand.js';

const program = new Command();

program
  .name(packageJson.name)
  .description('CLI to work locally with the package.')
  .version(packageJson.version);

program
  .addCommand(buildIconsCommand)
  .addCommand(createComponentCommand);

program.parse();
