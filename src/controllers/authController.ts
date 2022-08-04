import { Request, Response } from "express";
import { CreateSignUpData } from "../repositories/authRepository.js";
import { authService } from "../services/authService.js";

export async function signUp(req: Request, res: Response) {
    const data: CreateSignUpData = req.body;
    await authService.signUp(data);
    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const {email, password}: {email: string, password: string} = req.body;
    const userInfo = await authService.signIn(email, password);
    res.status(200).send(userInfo);
}
