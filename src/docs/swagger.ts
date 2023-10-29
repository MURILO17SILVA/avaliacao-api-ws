// src/docs/swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product API',
      version: '1.0.0',
    },
  },
  apis: ['src/routes/*.ts'],
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
