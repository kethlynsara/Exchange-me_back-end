import joi from "joi";
import { CreateSignUpData } from "../repositories/authRepository.js";

export const signUpSchema = joi.object<CreateSignUpData>({
    name: joi.string().required(),
    email: joi.string().email(),
    password: joi.string().required(),
    confirmPassword: joi.ref("password")
})