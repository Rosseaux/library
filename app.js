let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
let firstBook = new Book("Bill Murray's guide to ball play", "Bill Murray", 35, "read");

Book.prototype.bookFile = function() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages long, ${this.read}`);
};
function addBook() {
    
}
