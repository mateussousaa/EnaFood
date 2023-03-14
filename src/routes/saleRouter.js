import express from "express";
import * as saleController from '../controllers/saleController.js'
const saleRouter = express.Router();

saleRouter.post('/', saleController.insertSale)

export { saleRouter };