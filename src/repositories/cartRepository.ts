import { Cart } from "@prisma/client";
import prisma from "../database.js";

export type CreateCartData = Omit<Cart, "id" | "createdAt">; 

export async function insert(cartData: CreateCartData) {
    return prisma.cart.create({data: cartData});
}

export async function find(userId: number, bookId: number) {
    return prisma.cart.findFirst({
        where: {
            userId,
            bookId,
            active: true
        }
    });
}

export async function findByUserId(userId: number) {
    return prisma.cart.findMany({where: {userId}});
}

export async function findBooksByUserId(userId: number) {
    return prisma.cart.findMany({where: {
        userId
    },
    include: {
        book: true
    }
    });
}

export async function updateCart(userId: number) {
    return prisma.cart.updateMany({
        where: {
            userId,
        },
        data: {
            active: false,
        }
    });
}

export async function deleteById(id: number) {
    return prisma.cart.delete({where: {id}})
}