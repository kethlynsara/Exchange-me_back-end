import prisma from "../database.js";

import { ExchangeRequest } from "@prisma/client";

export type CreateExchangeRequestData = Omit<ExchangeRequest, "id" | "createdAt">;

export async function insertExchangeRequest(data: CreateExchangeRequestData) {
    return prisma.exchangeRequest.create({data});
}