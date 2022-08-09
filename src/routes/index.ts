import { Router } from "express";
import authRouter from "./authRouter.js";
import bookRouter from "./bookRouter.js";
import cartRouter from "./cartRouter.js";
import exchangeRouter from "./exchangeRouter.js";
import orderRouter from "./orderRouter.js";

const router = Router();

router.use(authRouter);
router.use(bookRouter);
router.use(exchangeRouter);
router.use(cartRouter);
router.use(orderRouter);

export default router;
