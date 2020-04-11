var fs =  require("fs");
//The function creates a txt file when it doesn't exist
fs.writeFileSync('Note.txt', 'Trial for writing into a file!!');
//Checking for appending
//fs.writeFileSync('Note.txt', 'Trial for writing into a file!!');
//For appending
fs.appendFileSync('Note.txt', '\r 2nd Trial for writing into a file!!');
console.log('Written into file!');
