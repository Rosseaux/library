let myLibrary = [];
let formButton = document.getElementById("show");
var inputForm = document.getElementById("inputForm");
let subButton = document.getElementById("submit");
inputForm.style.display = "none";

formButton.addEventListener("click", openForm);

function openForm() {
    if (inputForm.style.display === "none")
        inputForm.style.display = "block";
    else
        inputForm.style.display = "none";
}

function closeForm() {
    inputForm.style.display = "none";
    
}

subButton.addEventListener("click", () => {
    submitBook();
})

function submitBook() {
    let formTitle = document.getElementById("tInput").value;
    let formAuthor = document.getElementById("aInput").value;
    let formPages = document.getElementById("pInput").value;
    let formReadYes = document.getElementById("rInputYes").value;
    let formReadNo = document.getElementById("rInputNo").value;
    let formRead = "";
    if (formReadYes === "on") formRead = "read";
    else if (formReadNo === "on") formRead = "not read";
    let newBook = new Book(formTitle, formAuthor, formPages, formRead);
    closeForm();
    addBook(newBook);
    updateLibrary(newBook);
}


function updateLibrary(addition) {
    let newCard = document.createElement("div");
    let cardContainer = document.querySelector(".cardContainer");
    newCard.className = "card";
    cardContainer.appendChild(newCard);
    newCard.textContent = addition.bookFile();
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
let firstBook = new Book("Bill Murray's guide to Bill Murray", "Bill Murray", 35, "read");
let secondBook = new Book("Book test", "john dimness", 42, "not read");


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

