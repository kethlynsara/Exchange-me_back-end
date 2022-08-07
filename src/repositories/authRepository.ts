import { User } from "@prisma/client";
import prisma from "../database.js";

export type CreateSignUpData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string
}

export type CreateUserData = Omit<User, "id" | "createdAt" | "cashback">;

export async function insert(user: CreateUserData) {
    return prisma.user.create({data: {...user, cashback: "0"}});
}

export async function findByEmail(email: string) {
    return prisma.user.findFirst({where: {email}});
}

export async function findById(id: number) {
    return prisma.user.findFirst({where: {id}});
}

export async function updateCashback(id: number, cashback: string) {
    console.log(cashback, "cash")
    return prisma.user.update({
        where: {id},
        data: {cashback} 
    })
}