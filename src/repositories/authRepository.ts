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
    return prisma.user.create({data: {...user, cashback: ""}});
}

export async function findByEmail(email: string) {
    return prisma.user.findFirst({where: {email}});
}