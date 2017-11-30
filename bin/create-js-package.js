#! /usr/bin/env node
const yargs = require('yargs');
const creator = require('../lib/create-js-package');


if (yargs.argv._.length > 0) {
    const packageName = yargs.argv._[0];
    creator.run(packageName);
} else {
    console.log(`Please specify a name for your application
        Example: create-js-package myPackage`);
}
