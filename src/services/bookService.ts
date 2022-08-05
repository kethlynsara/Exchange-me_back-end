import * as bookRepository from "../repositories/bookRepository.js";

async function getAllBooks() {
    return await bookRepository.findAll();
}

export const bookService = {
    getAllBooks
}