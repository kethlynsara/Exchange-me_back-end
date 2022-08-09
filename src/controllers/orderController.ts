import { Request, Response } from "express";
import { orderService } from "../services/orderService.js";
import { paymentService } from "../services/paymentService.js";
import { userService } from "../services/userService.js";
import { addressService } from "../services/addressService.js";

export async function postOrder(req: Request, res: Response) {
    const { body } = req;
    const userId: number = res.locals.userId;
    
    await userService.findUser(userId);
    const addressId = await addressService.findAddress(userId, body.address);
    await paymentService.postPayment(userId, body.payment);
    await orderService.postOrder(body, userId, addressId);
    res.sendStatus(201);
}