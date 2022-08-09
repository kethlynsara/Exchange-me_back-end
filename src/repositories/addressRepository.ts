import { Address, UserAddress } from "@prisma/client";
import prisma from "../database.js";


export type CreateAddressData = Omit<Address, "id" | "createdAt">;
export type CreateUserAddressData = Omit<UserAddress, "id" | "createdAt">;

export async function findAddress(userId: number, address: CreateAddressData) {
    return await prisma.address.findFirst({where: {
        street: address.street,
        number: address.number,
        city: address.city,
        district: address.district,
        cep: address.cep,
        uf: address.uf
    }});
}

export async function postAddress(data: CreateAddressData) {
    return await prisma.address.create({data});
}

export async function findUserAddress(userId: number, id: number) {
    return await prisma.userAddress.findFirst({where: {
        id,
        userId
    }});
}

export async function insertUserAddress(data: CreateUserAddressData) {
    return await prisma.userAddress.create({data});
}