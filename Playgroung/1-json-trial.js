const book = {
    title: 'Harry Potter',
    author: 'JK Rowling'
}

//We do this because node JS only knows to consider string at this point
//Note: In the above structure bokJSON is not an object but only a string. 
//This is because we used JSON stringify
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

//JSON parse is the opposite of stringify. 
//It takes JSON data in and converts it to an object
const parsedData = JSON.parse(bookJSON);
console.log(parsedData.title);
console.log(parsedData.author);



