import express from "express";

const userRouter = express.Router();

userRouter.post('/', (req, res) => {
  res.status(200).json('user router - post')
})

export { userRouter };