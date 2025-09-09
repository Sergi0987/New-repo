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

const openBtn = document.getElementById("openFormBtn");
const closeBtn = document.getElementById("closeFormBtn");
const modal = document.getElementById("formModal");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// (optional) close if you click outside the form
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// form handling (as before)
const form = document.getElementById("bookForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const read = form.read.checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks(myLibrary);

  form.reset();
  modal.classList.add("hidden"); // close after submit
});

displayBooks(myLibrary);

