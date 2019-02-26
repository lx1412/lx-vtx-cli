const CP = require('child_process');
const fs = require('fs-extra');
const path = require('path');

module.exports = function () {
    CP.spawnSync('npm init', { shell: true, stdio: 'inherit', cwd: process.cwd() });

    let exists = fs.existsSync(path.join(process.cwd(), 'package.json'));
    if (!exists)
        process.exit(0);
}