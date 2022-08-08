import * as cartRepository from "../repositories/cartRepository.js";
import * as authRepository from "../repositories/authRepository.js";

async function checkUser(userFromToken: number, registeredUser: number) {
    if (userFromToken !== registeredUser) {
        throw {
            type: "conflit",
            message: "Invalid user!"
        }
    }
}

async function findUser(userId: number) {
    const user = await authRepository.findById(userId);
    if (!user) {
        throw {
            type: "unauthorized",
            message: "Invalid user!"
        }
    }
}

async function getActiveBooks(userId: number) {
    const books = await cartRepository.findBooksByUserId(userId);
    return books.filter((book) => book.active);
}

async function addBookToCart(userId: number, data: cartRepository.CreateCartData) {
    await findUser(userId);
    await checkUser(userId, data.userId);
    await cartRepository.insert(data);
}

async function findUserCart(userId: number) {
    await findUser(userId);
    return await getActiveBooks(userId);
}

export const cartService = {
    addBookToCart,
    findUserCart
}