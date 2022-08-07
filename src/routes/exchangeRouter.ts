import { Router } from "express";
import { getUserExchanges, updateCashback } from "../controllers/exchangeController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const exchangeRouter = Router();

exchangeRouter.get("/exchanges",  validateToken, getUserExchanges);
exchangeRouter.post("/exchanges/user/update", validateToken, updateCashback);

export default exchangeRouter;