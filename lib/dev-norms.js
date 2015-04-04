/**
 * Created by doguhanuluca on 4/4/15.
 */
var fs  = require('fs');
var path = require('path');
var _ = require('underscore');
var mknorms = require('./create-norms');
var request = require('request');

var argv = require('yargs').argv;

if(_.contains(argv._, "create")) {
    mknorms(argv.path || '.');
}
else if(_.contains(argv._, "update")) {

    if (!argv.path) {
        console.log("You must specify a path to confirm overwriting of existing norms.");
    } else {
        var fileName = path.join(argv.path, 'dev-norms.md');
        request('https://raw.githubusercontent.com/duluca/dev-norms/master/dev-norms.md').pipe(fs.createWriteStream(fileName));
        console.log('Updated: ' + fileName);
    }
} else {
    console.log("use create or update");
}