import { Router } from "express";
import { getUserExchanges } from "../controllers/exchangeController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const exchangeRouter = Router();

exchangeRouter.get("/exchanges",  validateToken, getUserExchanges);

export default exchangeRouter;