import { Request, Response } from "express";
import { exchangeService } from "../services/exchangeService.js";

export async function getUserExchanges(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const userBooks = await exchangeService.getUserExchanges(userId);
    res.send(userBooks);
}