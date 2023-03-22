import Book from './book';
import { BookRepo } from './bookRepo';
import { injectable } from 'tsyringe';

export interface IBookService {
    getAllBooks(): Promise<Book[]>;
    createBook(book: Book): Promise<Book>;
}

@injectable()
export class BookService implements IBookService {
    private bookRepo: BookRepo;

    constructor(bookRepo: BookRepo) {
        this.bookRepo = bookRepo;
    }

    async createBook(book: Book): Promise<Book> {
        return await this.bookRepo.create(book);
    }

    async getAllBooks(): Promise<Book[]> {
        return await this.bookRepo.all();
    }
}
