let bookCardArea = document.querySelector(".library-main");
let addBook = document.querySelector(".add-book");
let submitForm = document.querySelector(".submit-form");
let closeForm = document.querySelector(".close-form")
let dialog = document.querySelector("dialog");

let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let read = document.querySelector("#read");



let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(){
    let titleVal = title.value;
    let authorVal = author.value;
    let pagesVal = pages.value;
    let readVal = read.checked;

    let firstObj = new Book(titleVal, authorVal, pagesVal, readVal);
    myLibrary.push(firstObj);
    
    
}
submitForm.addEventListener("click", addBookToLibrary)


addBook.addEventListener("click", ()=> 
{dialog.showModal()}

)
closeForm.addEventListener("click", () =>
{dialog.close()})
