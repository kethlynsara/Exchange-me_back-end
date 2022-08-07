import { Router } from "express";
import authRouter from "./authRouter.js";
import bookRouter from "./bookRouter.js";
import exchangeRouter from "./exchangeRouter.js";

const router = Router();

router.use(authRouter);
router.use(bookRouter);
router.use(exchangeRouter);

export default router;
