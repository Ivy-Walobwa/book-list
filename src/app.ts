import { Book } from './modules/book.js'
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './modules/ListTemplate.js';


const form = document.querySelector('.new-book-form') as HTMLFormElement;

const title = document.querySelector('#title') as HTMLInputElement;
const author = document.querySelector('#author') as HTMLInputElement;
const genre = document.querySelector('#genre') as HTMLInputElement;
const pages = document.querySelector('#pages') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    doc = new Book(title.value, author.value, genre.value, pages.valueAsNumber)
    list.render(doc, title.value, 'end');
})
