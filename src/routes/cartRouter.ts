import { Router } from "express";
import { addBookToCart, deleteBookFromCart, findUserCart } from "../controllers/cartController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const cartRouter = Router();

cartRouter.use(validateToken);

cartRouter.get("/cart", findUserCart);
cartRouter.post("/cart", addBookToCart);
cartRouter.delete("/cart/:bookId", deleteBookFromCart);


export default cartRouter;