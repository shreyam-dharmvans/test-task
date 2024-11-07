import { Router } from "express";
import { signin, signout, signup } from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.get('/signup', signup);
userRouter.get('/signin', signin);
userRouter.get('/signout', signout);

export default userRouter;