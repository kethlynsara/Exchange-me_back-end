import { Router } from "express";
import { getUserExchanges, updateCashback } from "../controllers/exchangeController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const exchangeRouter = Router();

exchangeRouter.use(validateToken);

exchangeRouter.get("/exchanges", getUserExchanges);
exchangeRouter.post("/exchanges/user/update", updateCashback);

export default exchangeRouter;