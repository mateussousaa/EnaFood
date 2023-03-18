import express from 'express';
import * as userController from '../controllers/userController.js';
import { validateUser } from '../middlewares/userMiddleware.js';
import { authMiddleware } from '../middlewares/authMiddleware.js'


const userRouter = express.Router();

userRouter.post('/', validateUser, userController.insertUser);

userRouter.post('/login', userController.login)

userRouter.get('/', authMiddleware, userController.getUsers);

userRouter.get('/:id', authMiddleware, userController.getUserById);

export { userRouter };