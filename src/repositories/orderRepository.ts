import prisma from "../database.js";
import { Order, OrderBook } from "@prisma/client";

export type CreateOrderData = Omit<Order, "id" | "createdAt">;
export type CreateOrderBookData = Omit<OrderBook, "id" | "createdAt">;

export async function findOrder(userId: number, addressId: number, price: string) {
    return await prisma.order.findFirst({
        where: {
            userId,
            addressId,
            price},
        orderBy: {
            createdAt: "desc"
        }
    })
}

export async function findOrderBooks(orderId: number, bookId: number) {
    return await prisma.orderBook.findFirst({
        where: {
            orderId,
            bookId
        },
        orderBy: {
            createdAt: "desc"
        }
    })
}

export async function insert(data: CreateOrderData) {
    return await prisma.order.create({data});
}

export async function insertOrderBooks(data: CreateOrderBookData) {
    return await prisma.orderBook.create({data});
}