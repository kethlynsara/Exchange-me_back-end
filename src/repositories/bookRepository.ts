import { Book } from "@prisma/client";
import prisma from "../database.js";

export type CreateBookData = Omit<Book, "id" | "createdAt">;

export async function findAll() {
    return prisma.book.findMany();
}

export async function findNewest() {
    return prisma.book.findMany({orderBy: {createdAt: "desc"}});
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

export async function findById(bookId: number) {
    return prisma.book.findFirst({
        where: {
            id: bookId, 
        }});
}

export async function findUserExchanges(userId: number) {
    return prisma.book.findMany({where: {
        userId
    }, 
    include: {
        user: {
            select: {
                id: true,
                cashback: true
            }
        }
    }
    });
}

export async function insert(book: CreateBookData) {
    return prisma.book.create({data: book});
}

export async function insertExchange(bookId: number, userId: number) {
    return prisma.exchange.create({data: {userId, bookId}});
}

export async function updateBook(id: number, isAvailable: boolean) {
    return prisma.book.update({
        where: {
            id,            
        },
        data: {
            available: isAvailable
        }
    });
}