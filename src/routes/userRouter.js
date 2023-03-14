import express from "express";
import * as userController from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.post('/', userController.insertUser)

export { userRouter };