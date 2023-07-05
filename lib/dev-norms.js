import { createWriteStream } from 'fs'
import { join } from 'path'
import mknorms from './create-norms'
import { get } from 'request'

import { argv } from 'yargs'

if (argv._.includes('create')) {
  mknorms(argv.path || '.')
} else if (argv._.includes('update')) {
  if (!argv.path) {
    console.log(
      'You must specify a path, i.e. "--path=.", to confirm overwriting of existing norms.'
    )
  } else {
    const fileName = join(argv.path, 'dev-norms.md')
    get('https://raw.githubusercontent.com/duluca/dev-norms/master/dev-norms.md')
      .on('error', function (err) {
        console.log(err)
      })
      .pipe(createWriteStream(fileName))
    console.log('Updated: ' + fileName)
  }
} else {
  console.log('use "dev-norms create" or "dev-norms update"')
}
