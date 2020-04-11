const yargs = require('yargs');

//console.log(process.argv);
yargs.command({
    command: 'add',
    describe: 'Adding',
    builder: {
        tittle: {
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
        console.log('Title:' + argv.tittle);
        console.log('Body:' + argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing',
    handler: function(){
        console.log('Removing the elements!')
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

console.log(yargs.argv);
