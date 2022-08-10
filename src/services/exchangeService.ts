import * as authRepository from "../repositories/authRepository.js";
import * as bookRepository from "../repositories/bookRepository.js";
import * as exchangeRequestRepository from "../repositories/exchangeRepository.js";

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

async function getUserExchangeRequests(userId: number) {
    return await exchangeRequestRepository.findExchangeRequests(userId);
}

async function getExchangeRequest(exchangeRequestId: number) {
    const exchangeRequest = exchangeRequestRepository.findExchangeRequestById(exchangeRequestId);
    if (!exchangeRequest) {
        throw {
            type: "not found",
            message: "Exchange request not found!"
        }
    }
    return exchangeRequest;
}

export const exchangeService = {
    getUserExchanges,
    updateCashback,
    getUserExchangeRequests,
    getExchangeRequest
}

