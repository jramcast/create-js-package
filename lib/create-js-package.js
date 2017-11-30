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
        copyTemplateToCurrentDir();
        setNameInProjectJson(name);
    }
};


function copyTemplateToCurrentDir() {
    const originPath = path.join(__dirname, '../template');
    fs.copySync(originPath, process.cwd());
}


function setNameInProjectJson(name) {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJsonContents = fs.readJsonSync(packageJsonPath);
    packageJsonContents.name = name;
    fs.writeJsonSync(packageJsonPath, packageJsonContents);
}
