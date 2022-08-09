import { Payment } from "@prisma/client";
import prisma from "../database.js";

export type CreatePaymentData = Omit<Payment, "id" | "createdAt">;

export async function findByUserId(userId: number) {
    return await prisma.payment.findFirst({where: {userId}});
}

export async function insert(data: CreatePaymentData) {
    return await prisma.payment.create({data});
}