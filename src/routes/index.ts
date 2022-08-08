import { Router } from "express";
import authRouter from "./authRouter.js";
import bookRouter from "./bookRouter.js";
import cartRouter from "./cartRouter.js";
import exchangeRouter from "./exchangeRouter.js";

const router = Router();

router.use(authRouter);
router.use(bookRouter);
router.use(exchangeRouter);
router.use(cartRouter);

export default router;
