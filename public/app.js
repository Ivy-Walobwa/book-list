import { Book } from './modules/book.js';
const Book1 = new Book('Intelligent Investor', 'Benjamin', 'self-help', 721);
console.log(Book1);
let books = [];
books.push(Book1);
console.log(books);
const form = document.querySelector('.new-book-form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const genre = document.querySelector('#genre');
const pages = document.querySelector('#pages');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(title.value, author.value, genre.value, pages.valueAsNumber);
});
