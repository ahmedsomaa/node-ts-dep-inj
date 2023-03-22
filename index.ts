import { bookRouter } from './di';
import express from 'express';
import morgan from 'morgan';
import swaggerDocs from './swagger';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/books', bookRouter.routes());

app.listen(3000, () => {
    console.log(`app listening at http://localhost:3000`);
    swaggerDocs(app, 3000);
});
