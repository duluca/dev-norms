import { existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { get } from 'node:https'
import chalk from 'chalk'
import ora from 'ora'

const create = async (targetFileName, sourceUrl, baseDir, overwrite) => {
  const spinner = ora('Checking file...').start()
  const fileName = join(baseDir, targetFileName)

  if (!existsSync(fileName) || overwrite === true) {
    spinner.text = 'Downloading file...'
    try {
      await downloadFile(fileName, sourceUrl)
      spinner.succeed(`Created: ${chalk.green(fileName)}`)
    } catch (err) {
      spinner.fail(`Failed to download ${chalk.red.bold(`${targetFileName}!`)}`)
      console.error(err)
    }
  } else {
    spinner.fail(
      `${chalk.red.bold(`${targetFileName} already exists!`)} Run with ${chalk.green.bold(
        '-o'
      )} to overwrite with a fresh copy from GitHub.`
    )
    return false
  }

  return true
}

function downloadFile(fileName, sourceUrl) {
  return new Promise((resolve, reject) => {
    get(sourceUrl, (res) => {
      res.on('data', (data) => {
        writeFileSync(fileName, data)
        resolve()
      })
    }).on('error', (err) => {
      reject(err)
    })
  })
}

export default create
