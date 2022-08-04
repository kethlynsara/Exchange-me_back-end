import { NextFunction, Request, Response } from "express";
import { CreateSignUpData } from "../repositories/authRepository.js";
import { signInSchema, signUpSchema } from "../schemas/authSchema.js";

export async function validateSignUpData(req: Request, res: Response, next: NextFunction) {
    const data: CreateSignUpData = req.body;

    const { error } = signUpSchema.validate(data, {abortEarly: false});
    
    if (error) {
        return res.status(422).send(error.details.map((detail) => detail.message));
    }

    next();
}

export async function validateSignInData(req: Request, res: Response, next: NextFunction) {
    const data = req.body;

    const { error } = signInSchema.validate(data, {abortEarly: false});

    if (error) {
        return res.status(422).send(error.details.map((detail) => detail.message));
    }

    next();
}