import { Request, Response } from "express";
import { cartService } from "../services/cartService.js";
import { CreateCartData } from "../repositories/cartRepository.js";

export async function addBookToCart(req: Request, res: Response) {
    const userId = res.locals.userId;
    const data: CreateCartData = req.body;
    await cartService.addBookToCart(userId, data);
    res.sendStatus(201);
}

export async function findUserCart(req: Request, res: Response) {
    const userId = res.locals.userId;
    const cart = await cartService.findUserCart(userId);
    res.send(cart);
}

export async function deleteBookFromCart(req: Request, res: Response) {
    const userId = res.locals.userId;
    const { bookId } = req.params;
    const bookIdString = bookId.toString();
    await cartService.deleteBookFromTheCart(parseInt(bookIdString), userId);
    res.sendStatus(201);
}