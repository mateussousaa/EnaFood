import express from "express";
import * as saleController from '../controllers/saleController.js'
import { validateProductToSale, validateSale } from "../middlewares/saleMiddleware.js";
const saleRouter = express.Router();

saleRouter.post('/', validateSale, saleController.insertSale);

saleRouter.post('/:id/product', validateProductToSale, saleController.insertProductToSale)

saleRouter.get('/', saleController.getSales);

saleRouter.get('/:id', saleController.getSaleById);

saleRouter.put('/:id', validateSale, saleController.updateSale)

saleRouter.patch('/:id/prepare', saleController.prepareSale)

saleRouter.patch('/:id/conclude', saleController.concludeSale)


export { saleRouter };