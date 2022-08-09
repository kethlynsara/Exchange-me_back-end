import { Router } from "express";
import { postOrder } from "../controllers/orderController.js";
import { validateOrderData } from "../middlewares/orderMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const orderRouter = Router();

orderRouter.use(validateToken);

orderRouter.post("/order", validateOrderData, postOrder);

export default orderRouter; 