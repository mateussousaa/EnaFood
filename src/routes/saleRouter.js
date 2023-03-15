import express from "express";
import * as saleController from '../controllers/saleController.js'
import { validateSale } from "../middlewares/saleMiddleware.js";
const saleRouter = express.Router();

saleRouter.post('/', validateSale, saleController.insertSale);

saleRouter.get('/', saleController.getSales);

export { saleRouter };