const chalk = require('chalk');
const notes = require('./File_toImport.js');

const command = process.argv[2];
//console.log(command);

if(command === 'add'){
    //Will not work cause it reads as string
    // const el1 = process.argv[3];
    // const el2 = process.argv[4];
    // const sum = el1 + el2;
    // console.log(sum);
    console.log('Addition');
}
else if(command === 'sub') {
    // const el1 = process.argv[3];
    // const el2 = process.argv[4];
    // const subt = el1 - el2;
    // console.log(subt);
    console.log('Subtraction');
}