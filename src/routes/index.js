import express from 'express';
import orderController  from '../modules/order/order.controller.js';

const router = express.Router();

router.get('/order', orderController.index);
router.post('/order', orderController.create);


export default router;
