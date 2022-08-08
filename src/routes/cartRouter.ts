import { Router } from "express";
import { addBookToCart } from "../controllers/cartController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const cartRouter = Router();

cartRouter.use(validateToken);

cartRouter.post("/cart", addBookToCart);

export default cartRouter;