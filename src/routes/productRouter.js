import express from "express";

const productRouter = express.Router();

productRouter.post('/', (req, res) => {
  res.status(200).json('product router - post')
})

export { productRouter };