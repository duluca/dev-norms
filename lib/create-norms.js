import { existsSync, writeFileSync } from 'fs'
import { join } from 'node:path'
import { get } from 'https'

const create = function (baseDir, overwrite) {
  const fileName = join(baseDir, 'dev-norms.md')

  if (!existsSync(fileName) || overwrite === true) {
    get(
        'https://raw.githubusercontent.com/duluca/dev-norms/master/dev-norms.md',
        (res) => {
          res.on('data', (data) => {
            writeFileSync(fileName, data)
            console.log('Created: ' + fileName)
          })
        }
      )
      .on('error', (err) => {
        console.log(err)
      })
  } else {
    console.log(
      'You already have norms! Run with -o or --overwrite to overwrite from GitHub.'
    )
  }
}

export default create
