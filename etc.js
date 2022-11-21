const { tablica } = require('./helpers/sarasa.js');
const argv = require('./config/yargs');


console.clear();


// console.log(argv);

// const[,,etc="base=5"] = process.argv;
// const[,base] = etc.split("=");
// console.log(base)

// const base = 6;

tablica(argv.base, argv.l, argv.h)
    .then(archivo => console.log(archivo))
    .catch(err => console.log(err))
