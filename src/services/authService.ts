import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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

async function decrypt(password: string, registeredPassword: string) {
    const decryptedPassword = bcrypt.compareSync(password, registeredPassword);

    if (!decryptedPassword) {
        throw {
            type: "unauthorized",
            message: "Invalid password!"
        }
    }
}

async function generateToken(userId: number, name: string) {
    const data = { userId, name };
    const jwtKey = process.env.JWT_KEY;
    const config = { expiresIn: 60*60*24*30 }
    const token = jwt.sign(data, jwtKey, config);
    return token;
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

async function signIn(email: string, password: string) {
    const user = await checkUser(email, "signIn");
    await decrypt(password, user.password);
    const token = await generateToken(user.id, user.name);
    return {name: user.name, userId: user.id, token}
}

export const authService = {
    signUp,
    signIn
}