const myLibrary = [];
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
function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read))
}
addBookToLibrary("Broken", "Fatima Bala", 300, true);
addBookToLibrary("when the moon split", "Darrusalam", 300, true);
console.log(myLibrary);

