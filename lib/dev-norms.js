const fs = require('fs')
const path = require('path')
const mknorms = require('./create-norms')
const request = require('request')

const argv = require('yargs').argv

if (argv._.includes('create')) {
  mknorms(argv.path || '.')
} else if (argv._.includes('update')) {
  if (!argv.path) {
    console.log(
      'You must specify a path, i.e. "--path=.", to confirm overwriting of existing norms.'
    )
  } else {
    const fileName = path.join(argv.path, 'dev-norms.md')
    request
      .get('https://raw.githubusercontent.com/duluca/dev-norms/master/dev-norms.md')
      .on('error', function(err) {
        console.log(err)
      })
      .pipe(fs.createWriteStream(fileName))
    console.log('Updated: ' + fileName)
  }
} else {
  console.log('use "dev-norms create" or "dev-norms update"')
}
