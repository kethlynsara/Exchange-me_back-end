import { Router } from "express";
import { getAllBooks } from "../controllers/bookController.js";

const bookRouter = Router();

bookRouter.get("/books", getAllBooks);

export default bookRouter;