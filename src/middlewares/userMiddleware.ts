import { NextFunction, Request, Response } from "express";
import { cashbackSchema } from "../schemas/userSchema.js";

export async function validateCashbackData(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const { error } = cashbackSchema.validate(body, {abortEarly: false});
    if (error) {
        return res.status(422).send(error.details.map(detail => detail.message));
    }

    next();
}