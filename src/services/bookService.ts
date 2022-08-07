import * as bookRepository from "../repositories/bookRepository.js";

async function getAllBooks() {
    return await bookRepository.findAll();
}

async function checkUser(book: bookRepository.CreateBookData, userFromToken: number) {
    if (book.userId !== userFromToken) {
        throw {
            type: "unauthorized",
            message: "Invalid user!"
        }
    }
}

async function postExchange(book: bookRepository.CreateBookData, userFromToken: number) {
    const registeredBook = await bookRepository.findByUserId(userFromToken, book.title);
    console.log(registeredBook);
    if (!registeredBook) {
        throw {
            type: "not found",
            message: "Book not found! "
        }
    }
    await bookRepository.insertExchange(registeredBook.id, userFromToken);
}

async function postBook(book: bookRepository.CreateBookData, userFromToken: number) {
    await checkUser(book, userFromToken);
    await bookRepository.insert(book);
    await postExchange(book, userFromToken);
}

export const bookService = {
    getAllBooks,
    postBook
}