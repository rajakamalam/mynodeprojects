const fs = require('fs');
const chalk = require('chalk');
const getNotes = function(){
    return 'Your notes...';
}

const addNotes = function(title, body) {
    const notes = loadNotes()
    //console.log(notes);
    //Checking for duplicates
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })
    //'Notes' is the array that needs to be stored in. To insert an element into any form of array
    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('New note added')
    }
    else {
        console.log('Title already taken')
    }
}

//Removing notes - Task 1
const removeNotes = function(title) {
    const notes = remNotes(title)
}

const remNotes = function(title, body)
{
    const notes = loadNotes()
    //Once we have all the notes, we should check for duplicates: to identify which title to remove
    const noteToKeep = notes.filter(function(note) {
        return note.title !== title
    })
    if(noteToKeep.length !== 0) {
        saveNotes(noteToKeep);
        console.log(chalk.green.italic("Note removed"))
    }
    else
    {
        console.log(chalk.red.italic("No note found, with the title mentioned"))
    }
    

}

//Re-usable function that is used to save notes
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

//To load the existing notes into an array
const loadNotes = function()
{
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
};