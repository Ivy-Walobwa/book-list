import { Book } from './modules/book.js';
const form = document.querySelector('.new-book-form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const genre = document.querySelector('#genre');
const pages = document.querySelector('#pages');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    doc = new Book(title.value, author.value, genre.value, pages.valueAsNumber);
    console.log(doc);
});
