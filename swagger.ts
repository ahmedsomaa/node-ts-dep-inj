import { Application } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Basic Meta Informations about our API
const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Books API', version: '1' },
    servers: [{ url: `http://localhost:3000/` }]
  },
  apis: ['./bookController.ts', './book.ts']
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
const swaggerDocs = (app: Application, port: number) => {
  // Route-Handler to visit our docs
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Make our docs in JSON format available
  app.get('/docs.json', (_req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  console.log(`Version 1 Docs are available on http://localhost:${port}/docs`);
};

export default swaggerDocs;
