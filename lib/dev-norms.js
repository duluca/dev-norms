import createNorms from './create-norms.js'

import { Command } from 'commander'
import chalk from 'chalk'

const program = new Command()

program
  .name('dev-norms')
  .description(
    'Create and maintain developer norms and PR template for your project in your repo.'
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
      await createNorms(
        'dev-norms.md',
        'https://raw.githubusercontent.com/duluca/dev-norms/main/dev-norms.md',
        options.path,
        overwrite
      )
      await createNorms(
        'pull_request_template.md',
        'https://raw.githubusercontent.com/duluca/dev-norms/main/pull_request_template.md',
        options.path,
        overwrite
      )
    }

    console.log(
      `\n ⭐ ${chalk.yellow.bold(
        'Star'
      )} this project on GitHub https://github.com/duluca/dev-norms`
    )
  })

program.parse(process.argv)
