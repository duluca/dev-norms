import { existsSync, writeFileSync } from 'fs'
import { join } from 'node:path'
import { get } from 'https'

const create = function (baseDir) {
  const fileName = join(baseDir, 'dev-norms.md')

  if (!existsSync(fileName)) {
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
      'You already have norms! Run "dev-norms update" to overwrite with latest updates.'
    )
  }
}

export default create
