import { NextFunction, Request, Response } from "express";
import { CreateCartData } from "../repositories/cartRepository.js";
import { cartSchema } from "../schemas/cartSchema.js";

export async function validateBookData(req: Request, res: Response, next: NextFunction) {
    const data: CreateCartData = req.body;
    const { error } = cartSchema.validate(data, {abortEarly: false});
    if (error) {
        return res.status(422).send(error.details.map(detail => detail.message));
    }

    next();
}