import { Request, Response } from "express";
import { bookService } from "../services/bookService.js";

export async function getAllBooks(req: Request, res: Response) {
    const books = await bookService.getAllBooks();
    res.send(books);
}