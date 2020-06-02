export class Book {
    constructor(title, author, genre, pages) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
    }
    format() {
        return `${this.title} by ${this.author}, ${this.genre} book of ${this.pages} pages`;
    }
}
