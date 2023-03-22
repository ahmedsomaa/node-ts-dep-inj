import Book from './book';

export interface IBookRepo {
    all(): Promise<Book[]>;
    create(book: Book): Promise<Book>;
}

export class BookRepo implements IBookRepo {
    books: Book[] = [
        { id: 1, title: 'book 1' },
        { id: 2, title: 'book 2' }
    ];

    constructor() {}

    async create(book: Book): Promise<Book> {
        return new Promise<Book>((resolve, _reject) => {
            this.books.push(book);
            return resolve(book);
        });
    }

    async all(): Promise<Book[]> {
        return new Promise<Book[]>((resolve, _reject) => resolve(this.books));
    }
}
