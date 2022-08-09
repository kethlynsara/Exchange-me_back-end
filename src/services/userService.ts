import * as userRepository from "../repositories/userRepository.js";

async function findUser(userId: number) {
    const user = await userRepository.findById(userId);
    if (!user) {
        throw {
            type: "unauthorized",
            message: "Invalid user!"
        }
    }
}



export const userService = {
    findUser
}
