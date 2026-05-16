let myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.id = crypto.randomUUID(); 
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        if (this.read) {
            console.log(`The book ${title} by ${author} ${pages} pages, read`);
        } else console.log(`The book ${title} by ${author} ${pages} pages, not read`);
    };
}
Book.prototype.switchRead = function() {
    this.read = !this.read;
    }
function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read))
}
addBookToLibrary("Broken", "Fatima Bala", 417, true);
addBookToLibrary("When the moon split", "Darrusalam", 335, true);
addBookToLibrary("Before Forbes", "Sadiya Mukhtar", 190, true);
addBookToLibrary("The unfair advantage", "Ash Ali and Hasan Kubba", 300, true);
console.log(myLibrary);

function updateDisplay() {
    const container = document.getElementById("library-container");
    container.innerHTML = "";
    myLibrary.forEach(function(book) {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.innerHTML = ` <p> ${book.title} </p> <p> ${book.author} </p> <p> ${book.pages} </p>
         <p>${book.read ? "Read" : "Not read"}</p>
         <button class="remove-btn" data-id="${book.id}">Remove</button>
         <button class="read-btn" data-id="${book.id}">Read</button>`; 
        container.appendChild(card);
    }); 
}
updateDisplay();
const newBookBtn = document.getElementById("new-book-btn");
const dialog = document.getElementById("new-book-dialog");
newBookBtn.addEventListener("click", function() {
    dialog.showModal();
});
const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", function() {
    dialog.close();
});
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const pages = document.getElementById("pages").value;
const read = document.getElementById("read").checked;
    addBookToLibrary(title, author, pages, read);
    updateDisplay();
    dialog.close();
});
const container = document.getElementById("library-container");
container.addEventListener("click" , function(event){
    if (event.target.classList.contains("remove-btn")) {
        const id = event.target.dataset.id;   
        myLibrary = myLibrary.filter(function(book){
            return book.id !== id;
        });
        updateDisplay();
    }
    if(event.target.classList.contains("read-btn")) {
        const id = event.target.dataset.id;
        const readBook = myLibrary.find(function(book){
            return book.id === id;
    });
    readBook.switchRead();
    updateDisplay();
    }
});