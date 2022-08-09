import { Request, Response } from "express";
import { orderService } from "../services/orderService.js";
import { paymentService } from "../services/paymentService.js";
import { userService } from "../services/userService.js";

export async function postOrder(req: Request, res: Response) {
    const { body } = req;
    const userId: number = res.locals.userId;
    await userService
    await paymentService
    await orderService.postOrder(body, userId);
    res.sendStatus(201);
}