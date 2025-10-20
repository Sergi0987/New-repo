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
}

function newBook(title, author, pages, read){
    return {title,author,pages,read, id: crypto.randomUUID()};
}

class classNewBook {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    }

    sayBook() {
        return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`
    }
}

let newBookExample = new classNewBook("george", "sergio", 122, true);
newBookExample.sayBook();
Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

Book.prototype.info = function() {
    console.log(`Title of the book is ${this.title} author is ${this.author}, there are ${this.pages} pages, and it has been read? ${this.read}`);
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

let obje = {
    name: "John",
    surname: "Smith",

    get propName() {
        return `${this.name} ${this.surname}`;
    },

    set propName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

class User {
    constructor(name) {
        this.name = name;
    }

    get userName() {
        return this.name;
    }
    
    set userName(value) {
        this.name = value; 
    }
}

let user = new User("Sergio");
user.userName = 'Cathy';
alert(user.userName);

obje.propName = "Alice Cooper";


Person.prototype.sayName = () => console.log(`Hello, I'm ${this.name}!`);

Object.setPrototypeOf(Player.prototype, Person.prototype);

player1.sayName();
player2.sayName();

const libraryDiv = document.querySelector(".container");

function displayBooks(array) {
    libraryDiv.querySelectorAll('.box').forEach(el => el.remove());
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

        const toggleReadBtn = document.createElement("button");
        toggleReadBtn.textContent = "Toggle Read Status";

        toggleReadBtn.addEventListener("click", () => {
            element.toggleRead()
            displayBooks(myLibrary);
        })

        const removeBook = document.createElement("button");
        removeBook.textContent = "Remove";
        removeBook.addEventListener("click", () => {
            const idx = myLibrary.findIndex(el => el.id === element.id);
                if(idx > -1) {
                    myLibrary.splice(idx, 1);
                    displayBooks(myLibrary);
                }
        });

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(toggleReadBtn);
        card.appendChild(removeBook);

        libraryDiv.appendChild(card);
    }
);
}

const btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = 'Add a new book'
btn.addEventListener("click", () => {
    modal.showModal();
});

libraryDiv.appendChild(btn);

const form = document.querySelector(".formContainer");
const modal = document.querySelector('.modal');

const submitModal = document.createElement("button");
form.appendChild(submitModal);
submitModal.textContent = "Submit";

const closeModal = document.createElement("button");
form.appendChild(closeModal);
closeModal.textContent = "Close"


closeModal.addEventListener("click", () => {
    modal.close();
});

submitModal.addEventListener("click", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = Number(document.querySelector("#pages").value);
    const read = document.querySelector("#read").checked;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    displayBooks(myLibrary);    
    modal.close();
});


displayBooks(myLibrary);

const name = "bob";
const age = 21;
const color = "red";

const obj = {a:1,b:2,c:3};
const {a,b} = obj;
const {c} = obj;

const array = [1,2,3,4,5];
const [zero, one, two] = array;
console.log(zero, one);

function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation(); 

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});
// logs { discordName: "@josh", reputation: 2 }

function createPlayer (name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increaseLevel = () => level++;
  const getLevel = () => level;
  return { name, getReputation, giveReputation, increaseLevel, getLevel };
}

function createNewPlayer (name, level) {
  const user = createUser(name);

  const increaseLevel = () => level++;
  return Object.assign({}, user, { increaseLevel });
}

const sergio = createNewPlayer("sergio", 10);
sergio.giveReputation();
sergio.giveReputation();
sergio.increaseLevel();

console.log({
    name: sergio.discordName,
    reputation: sergio.getReputation(),
});

(function(){
    console.log("hello");
})();


// Immediately runs and returns the object
const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;

  return { add, sub, mul, div };
})();

console.log(calculator.add(3, 5));  // 8
console.log(calculator.mul(2, 6));  // 12
