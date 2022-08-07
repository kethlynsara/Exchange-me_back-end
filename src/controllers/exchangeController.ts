import { Request, Response } from "express";
import { exchangeService, UserData } from "../services/exchangeService.js";

export async function getUserExchanges(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const userBooks = await exchangeService.getUserExchanges(userId);
    res.send(userBooks);
}

export async function updateCashback(req: Request, res: Response) {
    const userId: number = res.locals.userId
    const userData: UserData = req.body;
    console.log(userId, userData, "data")
    await exchangeService.updateCashback(userId, userData.cashback);
}