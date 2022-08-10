import { Request, Response } from "express";
import { orderService } from "../services/orderService.js";
import { paymentService } from "../services/paymentService.js";
import { userService } from "../services/userService.js";
import { addressService } from "../services/addressService.js";
import { cartService } from "../services/cartService.js";

export async function postOrder(req: Request, res: Response) {
    const { body } = req;
    const userId: number = res.locals.userId;    

    await userService.findUser(userId);
    const addressId = await addressService.findAddressId(userId, body.address);
    await orderService.checkOrder(body, userId, addressId);
    await paymentService.postPayment({...body.payment, userId});    
    await orderService.postOrder(body, userId, addressId);
    await cartService.disableCart(userId);
    res.sendStatus(201);
}