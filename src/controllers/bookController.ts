import { Request, Response } from "express";
import { CreateBookData } from "../repositories/bookRepository.js";
import { bookService } from "../services/bookService.js";

export async function getAllBooks(req: Request, res: Response) {
    const books = await bookService.getAllBooks();
    res.send(books);
}

export async function postBook(req: Request, res: Response) {
    const data: CreateBookData = req.body;
    const userId: number = res.locals.userId;
    await bookService.postBook(data, userId);
    res.sendStatus(201);
}

export async function updateBook(req: Request, res: Response) {
    const body = req.body;
    await bookService.updateBook(body.id, body.available);
    res.sendStatus(201);
}