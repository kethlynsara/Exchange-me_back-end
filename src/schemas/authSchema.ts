import joi from "joi";
import { CreateSignUpData } from "../repositories/authRepository.js";

export const signUpSchema = joi.object<CreateSignUpData>({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref("password")
});

export const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});