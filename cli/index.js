import { Command } from 'commander';

import packageJson from '../package.json' assert { type: 'json' };
import { buildIconsCommand } from './cmd/build-icons/buildIconsCommand.js';
import { createComponentCommand } from './cmd/create-component/createComponentCommand.js';

const program = new Command();

program
  .name(packageJson.name)
  .description('CLI to work locally with the package.')
  .version(packageJson.version);

program
  .addCommand(buildIconsCommand)
  .addCommand(createComponentCommand);

program.parse();
