import orderLib from './order.lib.js'

export default {
    index: async function(req, resp, next){
        const orders = await orderLib.getOrders();
        resp.status(200).json({"message":'done', data: orders});
    },
    create: async function(req, resp, next){
        const orders = await orderLib.createOrder(req.body);
        resp.status(200).json({"message":'order created successfully', data: orders});
    }
}
