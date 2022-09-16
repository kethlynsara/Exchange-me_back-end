import joi from "joi";

export const orderSchema = joi.object({
    user: joi.object().required(),
    order: joi.array().required(),
    total: joi.number().required(),
    address: joi.object().required(),
});