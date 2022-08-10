import joi from "joi";

export const cashbackSchema = joi.object({
    cashback: joi.number().required()
})