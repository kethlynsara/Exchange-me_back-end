import joi from "joi";
import { CreateBookData } from "../repositories/bookRepository.js";

export const bookSchema = joi.object<CreateBookData>({
    title: joi.string().required(),
    author: joi.string().required(),
    publisher: joi.string().required(),
    description: joi.string().required(),
    conservationState: joi.string().valid("new", "used").required(),
    conservationStateDescription: joi.string().required(),
    image: joi.string().required(),
    price: joi.string().required(),
    isbn: joi.string().required(),
    available: joi.boolean().required(),
    isFromExchange: joi.boolean().required(),
    userId: joi.number().required()
})