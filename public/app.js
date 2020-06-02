"use strict";
var Book = /** @class */ (function () {
    function Book(title, author, genre, pages) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
    }
    Book.prototype.format = function () {
        return this.title + " by " + this.author + ", " + this.genre + " book of " + this.pages + " pages";
    };
    return Book;
}());
var Book1 = new Book('Intelligent Investor', 'Benjamin', 'self-help', 721);
console.log(Book1);
var books = [];
books.push(Book1);
console.log(books);
var form = document.querySelector('.new-book-form');
var title = document.querySelector('#title');
var author = document.querySelector('#author');
var genre = document.querySelector('#genre');
var pages = document.querySelector('#pages');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(title.value, author.value, genre.value, pages.valueAsNumber);
});
