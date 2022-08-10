import { NextFunction, Request, Response } from "express";
import { CreateBookData } from "../repositories/bookRepository.js";
import { bookSchema, updateBookData } from "../schemas/bookSchema.js";

export async function validateBookData(req: Request, res: Response, next: NextFunction) {
    const data: CreateBookData = req.body;
    const { error } = bookSchema.validate(data, {abortEarly: false});
    if (error) {
        return res.status(422).send(error.details.map(detail => detail.message));
    }

    next();
}

export async function validateUpdateBookData(req: Request, res: Response, next: NextFunction) {
    console.log('mid')
    const {id, available}: {id: number, available: boolean} = req.body;
    const { error } = updateBookData.validate({id, available}, {abortEarly: false});
    if (error) {
        return res.status(422).send(error.details.map(detail => detail.message));
    }

    next();
}