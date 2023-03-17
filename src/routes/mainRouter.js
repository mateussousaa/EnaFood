import express from 'express';
import { productRouter } from './productRouter.js';
import { saleRouter } from './saleRouter.js';
import { userRouter } from './userRouter.js';

const mainRouter = express.Router();

mainRouter.use('/products', productRouter);
mainRouter.use('/sales', saleRouter);
mainRouter.use('/users', userRouter);

export default mainRouter;