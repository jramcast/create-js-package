#! /usr/bin/env node
const yargs = require('yargs');
const creator = require('../lib/create-js-package');
const { execSync } = require('child_process');

if (yargs.argv._.length > 0) {
    const packageName = yargs.argv._[0];
    console.log('\x1b[36m%s\x1b[0m', '1. Generate files');
    creator.run(packageName);
    console.log('\x1b[33m%s\x1b[0m', '2. Install NPM dependencies');
    execSync('npm i', { shell: true, stdio: 'inherit' });
    console.log(
        '3. \x1b[32mDONE\x1b[0m',
        'Run \x1b[1m npm start \x1b[0m to start your app.'
    );
} else {
    console.log(`Please specify a name for your application
        Example: create-js-package myPackage`);
}
