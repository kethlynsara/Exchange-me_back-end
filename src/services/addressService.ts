import { CreateAddressData } from "../repositories/addressRepository.js";
import * as addressRepository from "../repositories/addressRepository.js";

async function findAddress(address: CreateAddressData, userId: number) {
    let userAddress = await addressRepository.findAddress(address);
    if (!userAddress) {
        await addressRepository.insertAddress(address);
        userAddress = await addressRepository.findAddress(address);
        await addressRepository.insertUserAddress({userId, addressId: userAddress.id});
    }
    return userAddress;
}

async function findAddressId(userId: number, address: CreateAddressData) {
    const userAddress = await findAddress(address, userId);
    return userAddress.id;
}

async function updateAddress() {

}

export const addressService = {
    findAddressId
}