import orderModel from './order.model.js';

export default {
    getOrders : function(){
        return orderModel.find();
    },
    createOrder : function(data){
        return orderModel.create(data);
    }
}