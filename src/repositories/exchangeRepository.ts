import prisma from "../database.js";

import { ExchangeRequest } from "@prisma/client";

export type CreateExchangeRequestData = Omit<ExchangeRequest, "id" | "createdAt">;

export async function insertExchangeRequest(data: CreateExchangeRequestData) {
    return prisma.exchangeRequest.create({data});
}

export async function findExchangeRequestById(exchangeRequestId: number) {
    return prisma.exchangeRequest.findFirst({
        where: {
            id: exchangeRequestId
        },
        include: {
            orderBook: {
                select: {
                    book: true,
                    order: {
                        select: {
                            address: true
                        }
                    }
                }
            }
        }
    })
}

export async function findExchangeRequests(sellerId: number) {
    return prisma.exchangeRequest.findMany({
        where: {
            sellerId
        },
        include: {
            orderBook: {
                select: {
                    book: true,
                    order: {
                        select: {
                            address: true
                        }
                    }
                }
            }
        }
    })
}