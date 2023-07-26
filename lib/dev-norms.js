import { oraPromise } from 'ora'
import createNorms from './create-norms.js'

import { Command } from 'commander'

const program = new Command()

program
  .name('dev-norms')
  .description(
    'Create and maintain sensible developer norms for your project in markdown.'
  )
  .version('2.0.0')

program
  .command('create')
  .description(
    'Create or update dev-norms.md and pull_request_template.md files on the current path'
  )
  .option('-p, --path <path>', 'specify the file path', '.')
  .option('-o, --overwrite', 'overwrite existing files with fresh ones from GitHub')
  .action(async (options) => {
    let overwrite = options.overwrite ? true : false
    if (options.path) {
      await oraPromise(
        createNorms(
          'dev-norms.md',
          'https://raw.githubusercontent.com/duluca/dev-norms/main/dev-norms.md',
          options.path,
          overwrite
        )
      )
      await oraPromise(
        createNorms(
          'pull_request_template.md',
          'https://raw.githubusercontent.com/duluca/dev-norms/main/pull_request_template.md',
          options.path,
          overwrite
        )
      )
    }
  })

program.parse(process.argv)
