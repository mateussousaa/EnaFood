import express from 'express';
import * as productController from '../controllers/productController.js';
import { validateProduct } from '../middlewares/productMiddleware.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const productRouter = express.Router();

productRouter.use(authMiddleware);

productRouter.post('/', validateProduct, productController.insertProduct);

productRouter.get('/', productController.getProducts);

productRouter.put('/:id', validateProduct, productController.updateProduct);

export { productRouter };