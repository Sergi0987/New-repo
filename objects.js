function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = () => { 
        console.log(this.name);
    };
}

const player1 = new Player('steve', 'x');
const player2 = new Player('mark', 'o');


const myLibrary = [
    new Book("The Hobbit", "J.R.R. Tolkien", 310, true),
    new Book("Dune", "Frank Herbert", 412, false)
];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = () => console.log(`Title of the book is ${title} author is ${author}, there are ${pages} pages, and it has been read? ${read}`);
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const theHobbit = new Book('Hobbit', 'Sergio', 123, false);

Player.prototype.sayHello = () => console.log("Hello, I'm player " + this.name);

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = () => console.log(`Hello, I'm ${this.name}!`);

Object.setPrototypeOf(Player.prototype, Person.prototype);

player1.sayName();
player2.sayName();

const libraryDiv = document.querySelector(".container");

function displayBooks(array) {
    array.forEach(element => {
        element.info();
        const card = document.createElement("div");
        card.classList.add("box");

        const title = document.createElement("h3");
        title.textContent = element.title;

        const author = document.createElement("p");
        author.textContent = `Author: ${element.author}`;

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${element.pages}`;

        const read = document.createElement("p");
        read.textContent = element.read ? "Already read" : "Not read yet";

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);

        libraryDiv.appendChild(card);
    }
);
}

const btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = 'Add a new book'
libraryDiv.appendChild(btn);
const form = document.querySelector(".formContainer");
const modal = document.querySelector('.modal');

const closeModal = document.createElement("button");
closeModal.textContent = "Close"
modal.appendChild(closeModal);

closeModal.addEventListener("click", () => {
    modal.close();
});

btn.addEventListener("click", () => {
    modal.showModal();
});

displayBooks(myLibrary);

