import { Router } from "express";
import { updateCashback } from "../controllers/userController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
import { validateCashbackData } from "../middlewares/userMiddleware.js";

const userRouter = Router();

userRouter.post("/user/cashback", validateToken, validateCashbackData, updateCashback);

export default userRouter;