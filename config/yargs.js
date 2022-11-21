const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:"etc"
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe:"etc"
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw "Tiene que ser un numero"
        }
        return true;
    })
    .argv;

    module.exports = argv;