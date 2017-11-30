# frontend-components-boilerplate

Create a JS package with es6, testing, linting, and publication tools included.

[![Build Status](https://travis-ci.org/jramcast/create-js-package.svg?branch=master)](https://travis-ci.org/jramcast/create-js-package)


## Requirements

* Node version >= 6

## Usage

Install the tool globally

```
npm install -g create-js-package
```

Navigate to the directory where you want to scaffold the app and run the command:

```
cd my-empty-repo/
create-js-package my-new-package
```


### Available commands

You generated package will have the following commands available:

Start the app
```
npm start
```

Start the app in watch (dev) mode
```
npm run start:watch
```

Run tests and calculate coverage:
```
npm test
```

Run tests in watch (dev) mode. This allows continuous testing while developing:
```
npm run test:watch
```

Run linter (coding standard):
```
npm run lint
```
