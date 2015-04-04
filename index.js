var fs = require('fs');
var mknorms = require('./lib/create-norms');

if (fs.existsSync('dev-norms.md')) {
    var baseDir = process.argv[2] || '';
    mknorms(baseDir);
}