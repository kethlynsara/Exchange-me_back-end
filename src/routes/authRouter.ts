import { Router } from "express";
import { signUp } from "../controllers/authController.js";
import { validateSignUpData } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/signup", validateSignUpData, signUp);

export default authRouter;
