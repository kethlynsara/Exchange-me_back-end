import joi from "joi";

export const orderSchema = joi.object({
    user: joi.object().required(),
    order: joi.object().required(),
    total: joi.number().required(),
    address: joi.object().required(),
    payment: joi.object().required(),
});