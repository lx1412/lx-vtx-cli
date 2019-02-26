#!/usr/bin/env node

let generator = require('./lib/generator');

let { d, v, m, r } = require('yargs')
    .usage('vtx-cli [-d] [-v] [-m]')
    .option('d', {
        alias: "dva",
        type: "boolean",
        describe: "dva + react",
        conflicts: ['m', 'v',]
    })
    .option('m', {
        alias: "mobx",
        type: "boolean",
        describe: "mobx + react",
        conflicts: ['d', 'v',]
    })
    // .option('r', {
    //     alias: "react-component",
    //     type: "boolean",
    //     describe: "react-component",
    //     conflicts: ['d', 'v', 'm',]
    // })
    .option('v', {
        alias: "vue",
        type: "boolean",
        describe: "vue + vuex",
        conflicts: ['d', 'm',]
    })
    .argv;

if (d) {
    generator('dva');
}
else if (m) {
    generator('mobx-react');
}
// else if (r) { }
else if (v) {
    generator('vuex');
}
else {
    console.log('Use vtx-cli --help for more information');
}





