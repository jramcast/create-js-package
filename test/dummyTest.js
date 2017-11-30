/* eslint-env node, mocha */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-statements */
/* eslint-disable import/no-extraneous-dependencies */

const fs = require('fs-extra');
const path = require('path');
const chai = require('chai');
const creator = require('../lib/create-js-package');


// Enables the "should" assertion style in chai
chai.should();


describe('create-js-package.run(packageName) ', () => {

    let packageName;
    let tmpDir;

    beforeEach(() => {
        packageName = 'myTestPackage';
        tmpDir = path.join(__dirname, `tmp/${packageName}`);
        fs.ensureDirSync(tmpDir);
        process.chdir(tmpDir);
    });

    afterEach(() => {
        fs.removeSync(tmpDir);
    });

    it('copies package.json scripts from template', () => {
        creator.run(packageName);
        const originalPath = path.join(__dirname, '../template/package.json');
        const destinationPath = path.join(__dirname, 'tmp/myTestPackage/package.json');
        const original = fs.readJsonSync(originalPath);
        const generated = fs.readJsonSync(destinationPath);
        original.scripts.should.eql(generated.scripts);
    });

    it('sets package.json name to the specified package name', () => {
        creator.run(packageName);
        const packageJsonPath = path.join(__dirname, 'tmp/myTestPackage/package.json');
        const packageJsonContents = fs.readJsonSync(packageJsonPath);
        packageJsonContents.name.should.eql('myTestPackage');
    });

    it('copies the src example file', () => {
        creator.run(packageName);
        const expectedPath = path.join(__dirname, 'tmp/myTestPackage/src/index.js');
        const result = fs.statSync(expectedPath);
        result.should.be.an('object');
    });

    it('copies the example test', () => {
        creator.run(packageName);
        const expectedPath = path.join(__dirname, 'tmp/myTestPackage/test/dummyTest.js');
        const result = fs.statSync(expectedPath);
        result.should.be.an('object');
    });

    it('copies .eslintrc', () => {
        creator.run(packageName);
        const expectedPath = path.join(__dirname, 'tmp/myTestPackage/.eslintrc');
        const result = fs.statSync(expectedPath);
        result.should.be.an('object');
    });

    it('copies .eslintignore', () => {
        creator.run(packageName);
        const expectedPath = path.join(__dirname, 'tmp/myTestPackage/.eslintignore');
        const result = fs.statSync(expectedPath);
        result.should.be.an('object');
    });

});
