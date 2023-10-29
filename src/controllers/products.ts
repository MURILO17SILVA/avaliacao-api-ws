// src/controllers/products.ts
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../entities/Product';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const productRepository = getRepository(Product);
    const { description, price, quantity } = req.body;

    if (!description || !price || !quantity) {
      return res.status(400).json({ message: 'Invalid inputs' });
    }

    const product = productRepository.create({ description, price, quantity });
    await productRepository.save(product);

    return res.status(201).json({ message: 'Product registered' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const productRepository = getRepository(Product);
    const { id } = req.params;
    const product = await productRepository.findOne(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
