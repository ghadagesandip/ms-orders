import {expect} from 'chai';
import sinon from'sinon';
import { faker } from '@faker-js/faker';

import orderController from "../../../../src/modules/order/order.controller.js";
import orderLib from "../../../../src/modules/order/order.lib.js";



describe('order.controller', function(){
    let status, json, res;
    beforeEach(()=>{
       
        status = sinon.stub().returns(200);
        json = sinon.spy();
        res = { json, status };
        status.returns(res);
    })

    describe('list orders', function(){
        
        it('should return orders list', async function(){
            const req = { body:{}};
            sinon.stub(orderLib, 'getOrders').returns(Promise.resolve([]))
            await orderController.index(req, res);
            expect(res.json).to.be.exist
            expect(res.status).to.be.exist
        })
    });

    describe('create order ', function(){

        it('should able to create order', async function(){
            const req = { body: {
                title: faker.lorem.text,
                price: faker.commerce.price,
                shipping_address: faker.address.secondaryAddress,
                billing_address:faker.address.secondaryAddress,
                payment_method:faker.lorem.text,
                sub_total: faker.commerce.price,
                shipping_price: faker.commerce.price,
                delivery_charges: faker.commerce.price,
                total: faker.commerce.price,
                productId: faker.lorem.text
            }}
    
            const stub = sinon.stub(orderLib, 'createOrder').returns(Promise.resolve([]))
            await orderController.create(req, res);
            expect(stub.calledOnce).to.be.true;
        })
        
        
    })
})

afterEach(()=>{
    sinon.restore();
})