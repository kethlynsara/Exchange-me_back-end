import { Book } from "@prisma/client";
import prisma from "../database.js";

export type CreateBookData = Omit<Book, "id" | "createdAt">;

export async function findAll() {
    return prisma.book.findMany();
}

export async function findByUserId(userId: number, bookTitle: string) {
    return prisma.book.findFirst({
        where: {
            userId, 
            available: true,
            title: bookTitle
        },
        orderBy: {
            createdAt: "desc"
        }
    });
}

export async function insert(book: CreateBookData) {
    return prisma.book.create({data: book});
}

export async function insertExchange(bookId: number, userId: number) {
    return prisma.exchange.create({data: {userId, bookId}});
}