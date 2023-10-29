import { Router } from 'express';
import { createProduct, getProductById } from '../controllers/products';

const router = Router();

router.post('/products', createProduct);
router.get('/products/:id', getProductById);

export default router;
