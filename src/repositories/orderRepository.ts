import prisma from "../database.js";

import { Order, OrderBook } from "@prisma/client";

export type CreateOrderData = Omit<Order, "id" | "createdAt">;

export type CreateOrderBookData = Omit<OrderBook, "id" | "createdAt">;

export async function insert(data: CreateOrderData) {
    return await prisma.order.create({data});
}

export async function insertOrderBooks(data: CreateOrderBookData) {
    return await prisma.orderBook.create({data});
}