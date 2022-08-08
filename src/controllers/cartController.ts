import { Request, Response } from "express";
import { cartService } from "../services/cartService.js";
import { CreateCartData } from "../repositories/cartRepository.js";

export async function addBookToCart(req: Request, res: Response) {
    const userId = res.locals.userId;
    const data: CreateCartData = req.body;
    await cartService.addBookToCart(userId, data);
    res.sendStatus(201);
}