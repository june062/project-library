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
    bookCard.setAttribute("data-bookId", myLibrary[myLibrary.length-1].bookId); 
    bookCard.setAttribute("id",myLibrary[myLibrary.length-1].bookId )
    bookCardArea.appendChild(bookCard);

    let titleSpan =  document.createElement("span");
    titleSpan.classList.add("title");

    let authorSpan = document.createElement("span");
    authorSpan.classList.add("author");

    let pagesSpan =  document.createElement("span");
    pagesSpan.classList.add("pages");

    let readSpan =  document.createElement("span");
    readSpan.classList.add("read");

    let readToggle = document.createElement("input");
    readToggle.setAttribute("type", "checkbox");
    readToggle.setAttribute("id", "readToggle");

    let deleteCard = document.createElement("button");
    deleteCard.classList.add("delete-card");
    deleteCard.textContent = "Delete";


    bookCard.appendChild(titleSpan);
    bookCard.appendChild(authorSpan);
    bookCard.appendChild(pagesSpan);
    bookCard.appendChild(readSpan);
    bookCard.appendChild(readToggle)
    bookCard.appendChild(deleteCard);
   

    authorSpan.textContent = `Author: ${myLibrary[myLibrary.length - 1].author}`;
    titleSpan.textContent = `Title: ${myLibrary[myLibrary.length - 1].title}`;
    pagesSpan.textContent = `${myLibrary[myLibrary.length - 1].pages} pages`;
    readSpan.textContent = myLibrary[myLibrary.length - 1].read;

}

Book.id = 0;
function Book(title, author, pages, read){
    this.bookId = ++Book.id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.readToggle = function (){
    let readDOMEl = document.querySelector(`[data-bookid ='${this.bookId}'] > span.read`)
   if (this.read === "Read"){
        this.read = "Not Read";
        readDOMEl.textContent = "Not Read";
   }
   else {
        this.read = "Read"
        readDOMEl.textContent = "Read";
   }
}

function addBookToLibrary(){
    let titleVal = title.value;
    let authorVal = author.value;
    let pagesVal = pages.value;
    let readVal = read.checked? "Read" : "Not Read";
    

    let newBook = new Book(titleVal, authorVal, pagesVal, readVal);
    myLibrary.push(newBook);
    
    displayLastLibraryItem();

}

bookCardArea.addEventListener("click", (event)=>{
    if (event.target.id != "readToggle"){
        return;
    }
    else {
        let domData = +event.target.parentNode.dataset.bookid;
        let bookIndex = myLibrary.findIndex(element => {
            return element.bookId === domData; });
        
        myLibrary[bookIndex].readToggle();
    }

})

bookCardArea.addEventListener("click", (event)=>{
    if(event.target.textContent != "Delete"){
        return}
    else{
        event.target.parentNode.remove();
    
        let domData = +event.target.parentNode.dataset.bookid;


        let bookIndex = myLibrary.findIndex(element => {
            return element.bookId === domData; 
        })
        myLibrary.splice(bookIndex,1);
}
    
})


submitForm.addEventListener("click", addBookToLibrary)


addBook.addEventListener("click", ()=> 
{dialog.showModal()}

)
closeForm.addEventListener("click", () =>
{dialog.close()})
