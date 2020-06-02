import{HasFormatter} from '../interfaces/HasFormatter'
export class Book implements HasFormatter{
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
