import { Book } from "@prisma/client";
import prisma from "../database.js";

export type CreateBookData = Omit<Book, "id" | "createdAt">;

export async function findAll() {
    return prisma.book.findMany();
}

export async function insert(book: CreateBookData) {
    return prisma.book.create({data: book})
}