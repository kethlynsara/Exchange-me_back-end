import * as bookRepository from "../repositories/bookRepository.js";

function comparador() { 
    return Math.random() - 0.5; 
}

async function getNewestBooks() {
    return await bookRepository.findNewest();
}

async function getNewBooks() {
    const allBooks = await bookRepository.findAll();
    const randomBooks =  allBooks.sort(comparador);
    return randomBooks.filter((book) => book.conservationState === "new");
}

async function getUsedBooks() {
    const allBooks = await bookRepository.findAll();
    const randomBooks =  allBooks.sort(comparador);
    return randomBooks.filter((book) => book.conservationState === "used");
}

async function getAllBooks() {
    const newestBooks = await getNewestBooks();
    const newBooks = await getNewBooks();
    const usedBooks = await getUsedBooks();
    return {new: newBooks, used: usedBooks, all: newestBooks}
}

async function getBookById(bookId: number) {
    const book = await bookRepository.findById(bookId);
    if (!book) {
        throw {
            type: "not found",
            message: "Book not found!"
        }
    }
    return book;
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

async function updateBook(bookId: number, available: boolean) {
    await getBookById(bookId);
    await bookRepository.updateBook(bookId, available);
}

export const bookService = {
    getAllBooks,
    postBook,
    updateBook,
    getBookById
}