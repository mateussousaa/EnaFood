import express from "express";
import * as userController from '../controllers/userController.js'
import { validateUser } from "../middlewares/userMiddleware.js";

const userRouter = express.Router();

userRouter.post('/', validateUser, userController.insertUser)

userRouter.get('/', userController.getUsers);

export { userRouter };