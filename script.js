let bookCardArea = document.querySelector(".library-main");
let addBook = document.querySelector(".add-book");
let submitForm = document.querySelector(".submit-form");
let closeForm = document.querySelector(".close-form")
let dialog = document.querySelector("dialog");
let deleteButton = document.querySelector(".delete-card");

let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let read = document.querySelector("#read");



let myLibrary = [];

function displayLastLibraryItem(){
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-arrayIndex", myLibrary.length - 1); 
    bookCardArea.appendChild(bookCard);

    let titleSpan =  document.createElement("span");
    titleSpan.classList.add("title");

    let authorSpan = document.createElement("span");
    authorSpan.classList.add("author");

    let pagesSpan =  document.createElement("span");
    pagesSpan.classList.add("pages");

    let readSpan =  document.createElement("span");
    readSpan.classList.add("read");

    let deleteCard = document.createElement("button");
    deleteCard.classList.add("delete-card");
    deleteCard.textContent = "Delete";


    bookCard.appendChild(titleSpan);
    bookCard.appendChild(authorSpan);
    bookCard.appendChild(pagesSpan);
    bookCard.appendChild(readSpan);
    bookCard.appendChild(deleteCard);

    authorSpan.textContent = myLibrary[myLibrary.length - 1].author;
    titleSpan.textContent = myLibrary[myLibrary.length - 1].title;
    pagesSpan.textContent = myLibrary[myLibrary.length - 1].pages;
    readSpan.textContent = myLibrary[myLibrary.length - 1].read;

}

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

    let newBook = new Book(titleVal, authorVal, pagesVal, readVal);
    myLibrary.push(newBook);
    
    displayLastLibraryItem();

}


bookCardArea.addEventListener("click", (event)=>{
    let bookArrayString = event.target.parentNode.dataset.arrayindex;
    let bookArrayNum = +bookArrayString;
    myLibrary.splice(bookArrayNum, 1);


})


submitForm.addEventListener("click", addBookToLibrary)


addBook.addEventListener("click", ()=> 
{dialog.showModal()}

)
closeForm.addEventListener("click", () =>
{dialog.close()})
