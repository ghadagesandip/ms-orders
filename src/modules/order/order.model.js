import mongoose from "mongoose";

const {Schema, Model} = mongoose;

const orderSChema = new Schema({
    title:{
        type:String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    shipping_address: {
        type:String,
        required: true
    },
    billing_address:{
        type:String,
        required: true
    },
    paymemt_method: {
        type:String,
        required: true
    },
    sub_total: {
        type:Number,
        required: true
    },
    shipping_price: {
        type:Number,
        required: true
    },
    delivery_charges: {
        type:Number,
        required: true
    },
    total: {
        type:Number,
        required: true
    },
    productId: {
        type: 'ObjectId', ref:'product'
    },
},{
    timestamps: true
});

export default mongoose.model('Order', orderSChema);
