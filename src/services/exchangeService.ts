import * as bookRepository from "../repositories/bookRepository.js";

async function getUserExchanges(userId: number) {
    return await bookRepository.findUserExchanges(userId);
}

export const exchangeService = {
    getUserExchanges
}

