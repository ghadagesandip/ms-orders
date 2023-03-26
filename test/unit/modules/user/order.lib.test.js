import chai from 'chai';
import sinon from 'sinon';
import { faker } from '@faker-js/faker';

import orderLib from './../../../../src/modules/order/order.lib.js';
import orderModel from './../../../../src/modules/order/order.model.js';


const expect = chai.expect;

describe('Order Lib', function(){
    const stubValue = [{id:1}];

    describe('get orders',  function(){
        it('should return orders list', async function(){
            const stub = sinon.stub(orderModel, 'find').returns(stubValue);
            const orders = await orderLib.getOrders();
            expect(stub.calledOnce).to.be.true;
            expect(orders).to.be.an('array');
            expect(orders[0]).to.have.property('id')
        })

        
    })

    describe('Create order', function(){
        it('should create a order', async function(){
            
            const orderData = {
                title: faker.lorem.text,
                price: faker.commerce.price,
                shipping_address: faker.address.secondaryAddress,
                billing_address:faker.address.secondaryAddress,
                payment_method:faker.lorem.text,
                sub_total: faker.commerce.price,
                shipping_price: faker.commerce.price,
                delivery_charges: faker.commerce.price,
                total: faker.commerce.price,
                payment_method: faker.lorem.text
            }
            expect(orderData).to.have.property('title');
            expect(orderData).to.have.property('price');
            expect(orderData).to.have.property('shipping_address');
            expect(orderData).to.have.property('payment_method');
            expect(orderData).to.have.property('payment_method');

            const stub = sinon.stub(orderModel, 'create').returns(orderData);
            const orderCreateData = await orderLib.createOrder(orderData);
            expect(stub.calledOnce).to.be.true;
            expect(orderData).to.be.an('object');
            expect(orderCreateData.title).to.equal(orderData.title);
            expect(orderCreateData.price).to.equal(orderData.price);
            expect(orderCreateData.shipping_address).to.equal(orderData.shipping_address);
        })
    })
   
})


afterEach(()=>{
    sinon.restore()
})
