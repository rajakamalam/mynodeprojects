const chalk = require('chalk');
const notes = require('./File_toImport.js');

const msg = notes();
console.log(msg);

console.log(chalk.blue.italic('Success'));