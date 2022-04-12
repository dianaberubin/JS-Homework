// 1. Create an object that represents a book. It should have 
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book, 
// that will return the following description from your book 
// object:
// `The book <book name> was written by <author name> in
// the year <publishing yeary

const book = {
    bookname: "bookname" ,
    authorname: "author",
    publishingyear: 2020 ,
    Publishername: "pub"
};

console.log("The book " + book.bookname + " was written by " + book.authorname + " in the year " + book.publishingyear);