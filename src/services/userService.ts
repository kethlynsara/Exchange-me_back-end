import * as userRepository from "../repositories/userRepository.js";

async function findUser(userId: number) {
    const user = await userRepository.findById(userId);
    if (!user) {
        throw {
            type: "unauthorized",
            message: "Invalid user!"
        }
    }
    return user;
}

async function updateCashback(userId: number, cashback: number){
    const user = await findUser(userId);
    const newCashback = parseFloat(user.cashback) + cashback;
    await userRepository.updateCashback(userId, `${newCashback}`);
}

export const userService = {
    findUser,
    updateCashback
}
