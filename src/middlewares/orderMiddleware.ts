import { NextFunction, Request, Response } from "express";
import { orderSchema } from "../schemas/orderSchema.js";

export async function validateOrderData(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const { error } = orderSchema.validate(body, {abortEarly: false});
    if (error) {
        return res.status(422).send(error.details.map(detail => detail.message));
    }

    next();
}