/* eslint-env node, mocha */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-statements */
/* eslint-disable import/no-extraneous-dependencies */

const chai = require('chai');
const dummy = require('../src/dummy');

// Enables the "should" assertion style in chai
chai.should();

describe('app: ', () => {
    test('dummy test', () => {
        const greeting = dummy.sayHello('developer');
        greeting.should.be.eql('Hey developer');
    });
});
