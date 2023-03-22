import 'reflect-metadata';

import BookRoutesControll from './bookController';
import { container } from 'tsyringe';

const bookRouter = container.resolve(BookRoutesControll);

export { bookRouter };
