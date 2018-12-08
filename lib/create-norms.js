const fs = require('fs')
const path = require('path')
const request = require('request')

const create = function(baseDir) {
  const fileName = path.join(baseDir, 'dev-norms.md')

  if (!fs.existsSync(fileName)) {
    request(
      'https://raw.githubusercontent.com/duluca/dev-norms/master/dev-norms.md'
    ).pipe(fs.createWriteStream(fileName))
    console.log('Created: ' + fileName)
  } else {
    console.log(
      'You already have norms! Run "dev-norms update" to overwrite with latest updates.'
    )
  }
}

module.exports = create
