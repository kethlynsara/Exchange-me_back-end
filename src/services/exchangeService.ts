import * as authRepository from "../repositories/authRepository.js"
import * as bookRepository from "../repositories/bookRepository.js";

export type UserData = {
    cashback: string;
}

async function getUserExchanges(userId: number) {
    return await bookRepository.findUserExchanges(userId);
}

async function checkUser(userId: number) {
    const user = await authRepository.findById(userId);
    if (!user) {
        throw {
            type: "unauthorized",
            message: "Invalid user!"
        }
    }
}

async function updateCashback(id: number, cashback: string) {
    await checkUser(id);
    await authRepository.updateCashback(id, cashback);
}

export const exchangeService = {
    getUserExchanges,
    updateCashback
}

