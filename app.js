let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
let firstBook = new Book("Bill Murray's guide to ball play", "Bill Murray", 35, "read");
let secondBook = new Book("Book test", "john dicky", 42, "not read");
;

Book.prototype.bookFile = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages long, ${this.read}`;
};
function addBook(book) {
    myLibrary.push( [{"Title: ":book.title},
                 {"Author: ":book.author},
                 {"Pages: ":book.pages},
                 {"Read: ":book.read}]);
    console.log("Book added!");
}

addBook(firstBook);

