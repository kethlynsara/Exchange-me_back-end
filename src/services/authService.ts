import bcrypt from "bcrypt";
import { CreateUserData } from "../repositories/authRepository.js";
import * as authRepository from "../repositories/authRepository.js";

async function checkUser(email:string, status: "signUp" | "signIn") {
    const user = await authRepository.findByEmail(email);

    if (user && status === "signUp") {
        throw {
            type: "not_found",
            message: "User already registered!"
        }
    }

    if (!user && status === "signIn") {
        throw {
            type: "unauthorized",
            message: "User not found!"
        }
    }

    return user;
}

async function encrypt(password: string) {
    const SALT = 10;
    const passwordHash = bcrypt.hashSync(password, SALT);
    return passwordHash;
}

async function signUp(userData: authRepository.CreateSignUpData) {
    await checkUser(userData.email, "signUp");
    const passwordHash = await encrypt(userData.password);
    await authRepository.insert({
        name: userData.name, 
        email: userData.email,
        password: passwordHash
    });
}

export const authService = {
    signUp
}