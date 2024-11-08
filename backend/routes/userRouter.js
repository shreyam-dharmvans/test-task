import { Router } from "express";
import { signin, signout, signup } from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.get('/signout', signout);

export default userRouter;