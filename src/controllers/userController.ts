import { Request, Response } from "express";
import { userService } from "../services/userService.js";

export async function updateCashback(req: Request, res: Response) {
    const userCashback = req.body;
    const userId: number = res.locals.userId;
    await userService.updateCashback(userId, userCashback.cashback);
    res.sendStatus(201);
}