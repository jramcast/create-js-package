# Create JS package [![Build Status](https://travis-ci.org/jramcast/create-js-package.svg?branch=master)](https://travis-ci.org/jramcast/create-js-package)
Create a JS package with es6, testing, linting, and publication tools included.
Generated projects include the following features:

* Unit testing with mocha, chai and sinon.
* Test watcher for continous testing.
* Test coverage with istanbul.
* ES6 linting based on [airbnb coding standard](https://www.npmjs.com/package/eslint-config-airbnb).
* Release scripts and automatic changelog generation based on commit messages, following conventions defined in [generate-changelog](https://www.npmjs.com/package/generate-changelog).

## Requirements

* Node version >= 6

## Installation

Install the tool globally:

```sh
npm install -g create-js-package
```

## Creation of a new package

Navigate to the directory where you want to scaffold the project and run the command:

```sh
mkdir my-package
cd my-package/
create-js-package my-package
```

## Available commands

The generated project will have the following commands available:

Start the app
```sh
npm start
```

Start the app in watch (dev) mode
```sh
npm run start:watch
```

Run tests and calculate coverage:
```sh
npm test
```

Run tests in watch (dev) mode. This allows continuous testing while developing:
```sh
npm run test:watch
```

Run linter (coding standard):
```sh
npm run lint
```
