import { Request, Response, Router } from 'express';

import { BookService } from './bookService';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export default class BookRoutesController {
    private router: Router;
    private bookService: BookService;

    constructor(bookService: BookService) {
        this.router = Router();
        this.bookService = bookService;
    }

    routes(): Router {
        /**
         * @openapi
         * /books:
         *   get:
         *     tags:
         *       - Books
         *     responses:
         *       200:
         *         description: OK
         *         content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#components/schemas/Book'
         */
        this.router.get('/', async (_req: Request, res: Response) => {
            try {
                const list = await this.bookService.getAllBooks();
                res.status(200).json(list);
            } catch (error) {
                const e = error as Error;
                res.send(e.message);
            }
        });

        /**
         * @openapi
         * /books:
         *   post:
         *     tags:
         *       - Books
         *     requestBody:
         *       require: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#components/schemas/Book'
         *     responses:
         *       200:
         *         description: OK
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#components/schemas/Book'
         */
        this.router.post('/', async (req: Request, res: Response) => {
            const newBook = req.body;

            try {
                const book = await this.bookService.createBook(newBook);
                res.status(200).json(book);
            } catch (error) {
                const e = error as Error;
                res.send(e.message);
            }
        });
        return this.router;
    }
}
