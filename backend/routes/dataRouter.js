import { Router } from "express";
import { verifyToken } from "../utils/token.js";
import { getRestrictedData } from "../controllers/dataController.js";

const dataRouter = Router();

dataRouter.get('/restricted', verifyToken, getRestrictedData);

export default dataRouter;
