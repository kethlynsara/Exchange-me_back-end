import { Router } from "express";
import authRouter from "./authRouter.js";
import bookRouter from "./bookRouter.js";

const router = Router();

router.use(authRouter);
router.use(bookRouter);

export default router;
