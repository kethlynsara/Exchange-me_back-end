import { Router } from "express";
import { getAllBooks, postBook } from "../controllers/bookController.js";
import { validateBookData } from "../middlewares/bookMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const bookRouter = Router();

bookRouter.get("/books", getAllBooks);
bookRouter.post("/books/register", validateToken, validateBookData, postBook);

export default bookRouter;