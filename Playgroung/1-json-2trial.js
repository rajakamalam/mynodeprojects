const fs = require('fs');

const book = {
    title: 'Harry Potter',
    author: 'JK Rowling'
}

//---Writing or creating a file to write into
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json-learning.json', bookJSON);

//---Reading from a JSON file
//---Notes:
//When you read a file the data always comes back as a buffer.
//Buffer is node JS's way of storing binary data

const dataBuffer = fs.readFileSync('1-json-learning.json');
const dataJSON = dataBuffer.toString(); //to enable parsing
const data = JSON.parse(dataJSON);
//---Notes: Now we can use the data to displa, parse etc.


//console.log(dataBuffer); //will print it out as buffer
console.log(dataBuffer.toString());