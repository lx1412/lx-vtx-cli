const init = require('./init');
const unzip = require('unzip');
const fs = require('fs-extra');
const path = require('path');

module.exports = function (name) {
    init();

    let rs1 = fs.createReadStream(path.join(__dirname, '../', 'zip', `${name}.zip`));
    let extract1 = unzip.Extract({ path: process.cwd() });
    rs1.pipe(extract1);
    extract1.on('close', () => {
        let jsonPath = path.join(process.cwd(), 'package.json');
        let packageJson1 = require(jsonPath);
        let packageJson2 = require(path.join(__dirname, '../', 'zip', `${name}.json`));
        let json = Object.assign({}, packageJson2, packageJson1);
        json.scripts = Object.assign({}, packageJson2.scripts, json.scripts);
        fs.writeFileSync(jsonPath, JSON.stringify(json, null, 4));
    })

    let rs2 = fs.createReadStream(path.join(__dirname, '../', 'zip', 'webpack_common.zip'));
    rs2.pipe(unzip.Extract({ path: process.cwd() }));
}