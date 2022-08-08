import { Cart } from "@prisma/client";
import prisma from "../database.js";

export type CreateCartData = Omit<Cart, "id" | "createdAt">; 

export async function insert(cartData: CreateCartData) {
    return prisma.cart.create({data: cartData});
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