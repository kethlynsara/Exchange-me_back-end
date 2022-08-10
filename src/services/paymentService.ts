import * as paymentRepository from "../repositories/paymentRepository.js" 

async function findPayment(userId: number) {
    return await paymentRepository.findByUserId(userId);
}

async function postPayment(payment: paymentRepository.CreatePaymentData) {
    const paymentData = await findPayment(payment.userId);
    if (!paymentData) {
        await paymentRepository.insert(payment);
    } 
} 

export const paymentService = {
    postPayment
}