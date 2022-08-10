import { Router } from "express";
import { getAllBooks, postBook, updateBook } from "../controllers/bookController.js";
import { validateBookData, validateUpdateBookData } from "../middlewares/bookMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const bookRouter = Router();

bookRouter.get("/books", getAllBooks);
bookRouter.post("/books/update", validateToken, validateUpdateBookData, updateBook);
bookRouter.post("/books/register", validateToken, validateBookData, postBook);

export default bookRouter;