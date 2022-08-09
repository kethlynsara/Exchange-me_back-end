import * as authRepository from "../repositories/authRepository.js";

async function findUser(userId: number) {
    const user = await authRepository.findById(userId);
    if (!user) {
        throw {
            type: "unauthorized",
            message: "Invalid user!"
        }
    }
}

async function postOrder(orderData: any, userId: number) {
    await findUser(userId);
}

export const orderService = {
    postOrder
}