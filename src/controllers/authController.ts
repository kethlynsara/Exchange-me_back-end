import { Request, Response } from "express";
import { CreateSignUpData } from "../repositories/authRepository.js";
import { authService } from "../services/authService.js";

export async function signUp(req: Request, res: Response) {
    const data: CreateSignUpData = req.body;
    await authService.signUp(data);
    res.sendStatus(201);
}