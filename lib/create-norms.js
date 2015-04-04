/**
 * Created by doguhanuluca on 4/4/15.
 */
var fs  = require('fs');
var path = require('path');

var create = function(baseDir) {
    var fileName = path.join(baseDir, 'dev-norms.md');

    if (!fs.existsSync(fileName)) {
        fs.createReadStream('dev-norms.md').pipe(fs.createWriteStream(fileName));
        console.log('Created: ' + fileName);
    } else {
        console.log('You already have norms! Run update-norms to overwrite with latest updates.');
    }
};

module.exports = create;