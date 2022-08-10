import { Router } from "express";
import { getExchangeRequest, getUserExchangeRequests, getUserExchanges, updateCashback } from "../controllers/exchangeController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const exchangeRouter = Router();

exchangeRouter.use(validateToken);

exchangeRouter.get("/exchanges", getUserExchanges);
exchangeRouter.get("/exchanges/requests", getUserExchangeRequests);
exchangeRouter.get("/exchanges/requests/:exchangeId", getExchangeRequest);
exchangeRouter.post("/exchanges/user/update", updateCashback);

export default exchangeRouter;