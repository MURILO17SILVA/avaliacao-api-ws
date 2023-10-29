// src/app.ts
import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { json } from 'body-parser';
import productRoutes from './routes/products';
import { specs, swaggerUi } from './docs/swagger';

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use('/api', productRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, async () => {
  try {
    await createConnection();
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.error('Database connection error:', error);
  }
});
