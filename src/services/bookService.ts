import * as bookRepository from "../repositories/bookRepository.js";

async function getAllBooks() {
    return await bookRepository.findAll();
}

async function postBook(book: bookRepository.CreateBookData, userId: number) {
    await bookRepository.insert(book);
}

export const bookService = {
    getAllBooks,
    postBook
}