const fs = require('fs-extra');
const path = require('path');


/**
 * Main functionality
 */
module.exports = {

    /**
     * Runs create-js-package with the given package name
     *
     * @param {string} name
     */
    run(name) {
        const originPath = path.join(__dirname, '../template');
        const destinationPath = path.join(process.cwd());

        fs.copySync(originPath, destinationPath);

        const packageJsonPath = path.join(destinationPath, 'package.json');
        const packageJsonContents = fs.readJsonSync(packageJsonPath);
        packageJsonContents.name = name;
        fs.writeJsonSync(packageJsonPath, packageJsonContents);
    }
};
