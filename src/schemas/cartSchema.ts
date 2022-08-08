import joi from "joi";
import { CreateCartData } from "../repositories/cartRepository.js";

export const cartSchema = joi.object<CreateCartData>({
    userId: joi.number().required(),
    bookId: joi.number().required(),
    active: joi.boolean().required()
})