// const square = function(x) {
//     return x * x;
// }


//But why do we need arrow functions?
//---Answer: 1. It has short hand typing eg as below
const square = (x) => x * x;

//Standard arrow function - returns the same value, but is used when larger number of lines has to be used
// const square = (x) => {
//     return x * x;
// }
//console.log(square(3));

//---Answer 2: Arrow functions dont bind their own objects. So when you write 
//a function inside a function, this comes in handy

//-----Explanation for arrow functions:
const author = {
    name: 'Paulo Cohelo',
    bookList: ['The Alchemist', 'Brida', 'Veronica decides to die'],
    //printBookkName: function() {
    printBookkName() { //alternative syntax
        console.log('Book names for ' + this.name)
        //this keyword can be used because its the same object
        this.bookList.forEach((bookName) => {
            console.log(bookName + ' is written by ' + this.name)
        });
    }
}
author.printBookkName();


//There are 3 take aways from this lesson
//1. Short hand typing for arrow functions
//2. Alternative syntax for a function by using rrow functions
//3. Arrow functions dont bind their own this value -- this fact makes them poor candidates for functions
//This was taught in order to help is write functions without the function keyword: 
//Meaning, it will either be 1. arrow functions or 2. E6 definition (without the func keyword)
