import express from "express";
import * as productController from '../controllers/productController.js'

const productRouter = express.Router();

productRouter.post('/', productController.insertProduct)

export { productRouter };