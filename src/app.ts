class Book{


    constructor(
        readonly title: string,
        private author: string,
        public genre: string,
        public pages: number,
    ) {}

    format() {
        return `${this.title} by ${this.author}, ${this.genre} book of ${this.pages} pages`
    }
}

const Book1 = new Book('Intelligent Investor', 'Benjamin', 'self-help', 721);
console.log(Book1);

let books: Book[] = []
books.push(Book1);
console.log(books)

const form = document.querySelector('.new-book-form') as HTMLFormElement;

const title = document.querySelector('#title') as HTMLInputElement;
const author = document.querySelector('#author') as HTMLInputElement;
const genre = document.querySelector('#genre') as HTMLInputElement;
const pages = document.querySelector('#pages') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(title.value,
        author.value,
        genre.value,
        pages.valueAsNumber,
    );
})
