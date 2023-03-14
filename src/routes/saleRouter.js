import express from "express";

const saleRouter = express.Router();

saleRouter.post('/', (req, res) => {
  res.status(200).json('sale router - post')
})

export { saleRouter };