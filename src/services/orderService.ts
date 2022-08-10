import * as orderRepository from "../repositories/orderRepository.js";
import * as exchangeRepository from "../repositories/exchangeRepository.js";

async function findOrder(userId: number, addressId: number, price: number) {
    const order = await orderRepository.findOrder(userId, addressId, `${price}`); 
    return order;
}

async function postOrderBooks(booksFromOrder: any, orderId: number, userId: number) {
    for (let i = 0; i < booksFromOrder.length; i++) {
        await orderRepository.insertOrderBooks({bookId: booksFromOrder[i].bookId, orderId});
        const orderBook = await orderRepository.findOrderBooks(orderId, booksFromOrder[i].bookId);
        const orderBookId = orderBook.id;
        if (booksFromOrder[i].book.isFromExchange) {
            await exchangeRepository.insertExchangeRequest({buyerId: userId, sellerId: booksFromOrder[i].book.userId, orderBookId})
        }
    }
}

async function checkOrder(orderData: any, userId: number, addressId: number) {
    const order = await findOrder(userId, addressId, orderData.total);
    if (order) {
        throw {
            type: "conflict",
            message: "Order already registered!"
        }
    }
}

async function postOrder(orderData: any, userId: number, addressId: number) {
    await orderRepository.insert({userId, price: `${orderData.total}`, addressId});
    const order = await findOrder(userId, addressId, orderData.total);
    await postOrderBooks(orderData.order, order.id, userId);
}

export const orderService = {
    postOrder,
    checkOrder
}