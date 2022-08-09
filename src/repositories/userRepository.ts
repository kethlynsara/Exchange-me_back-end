import { User } from "@prisma/client";
import prisma from "../database.js";


// export type CreateAddressData = Omit<Address, "id" | "createdAt">;
// export type CreateUserAddressData = Omit<UserAddress, "id" | "createdAt">;

export async function findById(id: number) {
    return await  prisma.user.findFirst({where: {id}});
}
