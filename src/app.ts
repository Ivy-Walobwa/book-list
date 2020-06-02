import { Book } from './modules/book.js'
import { HasFormatter } from './interfaces/HasFormatter.js';


const form = document.querySelector('.new-book-form') as HTMLFormElement;

const title = document.querySelector('#title') as HTMLInputElement;
const author = document.querySelector('#author') as HTMLInputElement;
const genre = document.querySelector('#genre') as HTMLInputElement;
const pages = document.querySelector('#pages') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    doc = new Book(title.value, author.value, genre.value, pages.valueAsNumber)
    console.log(doc);
})
