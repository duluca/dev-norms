import { existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { get, request } from 'node:https'
import chalk from 'chalk'

const create = function (targetFileName, sourceUrl, baseDir, overwrite) {
  return new Promise((resolve, reject) => {
    const fileName = join(baseDir, targetFileName)

    if (!existsSync(fileName) || overwrite === true) {
      get(sourceUrl, (res) => {
        res.on('data', (data) => {
          writeFileSync(fileName, data)
          console.log(`Created: ${chalk.green(fileName)}`)
          resolve(true)
        })
      }).on('error', (err) => {
        console.error(err)
        resolve(false)
      })
    } else {
      console.log(
        `${chalk.red.bold('File already exists!')} Run with ${chalk.green.bold(
          '-o'
        )} or ${chalk.bold('--overwrite')} to overwrite with a fresh copy from GitHub.`
      )
      resolve(false)
    }
  })
}

export default create
