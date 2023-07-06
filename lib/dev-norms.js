import createNorms from './create-norms.js'

import { Command } from 'commander'

const program = new Command()

program
  .name('dev-norms')
  .description('Create and maintain sensible developer norms for your project in markdown.')
  .version('2.0.0')

program
  .command('create')
  .description('Create dev-norms.md on the current path')
  .option('-p, --path <path>', 'specify the file path', '.')
  .option('-o, --overwrite', 'overwrite existing norms file from GitHub')
  .action((options) => {
    let overwrite = options.overwrite ? true : false
    if (options.path) {
      createNorms(options.path, overwrite)
    }
  })

program.parse(process.argv)
