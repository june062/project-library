let bookCardArea = document.querySelector(".library-main");
let addBook = document.querySelector(".add-book");
let submitForm = document.querySelector(".submit-form");
let closeForm = document.querySelector(".close-form")
let dialog = document.querySelector("dialog");


let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(){

}


addBook.addEventListener("click", ()=> 
{dialog.showModal()}

)
closeForm.addEventListener("click", () =>
{dialog.close()})
