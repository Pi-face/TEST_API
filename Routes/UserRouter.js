import express from 'express';
import auth from '../Middleware/Auth.js';
import userController from '../Controller/UserController.js';

const userRouter = express.Router();

userRouter.post('/users', userController.create);

userRouter.get('/users', userController.getAll);

userRouter.get('/users/:id', auth.authenticate, userController.getById);

userRouter.patch('/users/:id', auth.authenticate, userController.updateAge);

userRouter.delete('/users/:id', auth.authenticate, userController.delete);

export default userRouter;