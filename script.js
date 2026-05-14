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
const book1 = new Book("Broken" , "Fatima Bala, ", 300, true);
const book2 = new Book("When time", "mukky", 149, true);
book1.info();
book2.info();