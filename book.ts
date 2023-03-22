/**
 * @openapi
 * components:
 *  schemas:
 *    Book:
 *      type: object
 *      required:
 *        - id
 *        - title
 *      properties:
 *        id:
 *          type: integer
 *        title:
 *          type: string
 */
type Book = { id: number; title: string };
export default Book;
