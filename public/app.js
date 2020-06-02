import { Book } from './modules/book.js';
import { ListTemplate } from './modules/ListTemplate.js';
const form = document.querySelector('.new-book-form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const genre = document.querySelector('#genre');
const pages = document.querySelector('#pages');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // tupples
    let values;
    values = [title.value, author.value, genre.value, pages.valueAsNumber];
    let doc;
    doc = new Book(...values);
    list.render(doc, title.value, 'end');
});
