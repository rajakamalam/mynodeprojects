const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./learningJSON');

//console.log(process.argv);
yargs.command({
    command: 'add',
    describe: 'Adding',
    builder: {
        title: {
            describe: 'Title of the note',
            //Demand option by default is true
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing',
    builder: {
        title: {
            describe: 'Title of the note',
            //Demand option by default is true
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
        //console.log('Removing the elements!')
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing',
    handler: function(){
        console.log('Listing down the elements!')
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading',
    handler: function(){
        console.log('Reading the elements!')
    }
})

yargs.argv;