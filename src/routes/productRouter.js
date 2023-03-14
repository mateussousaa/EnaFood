import express from "express";
import * as productController from '../controllers/productController.js'
import { validateProduct } from "../middlewares/validateProduct.js";

const productRouter = express.Router();

productRouter.post('/', validateProduct, productController.insertProduct)

export { productRouter };