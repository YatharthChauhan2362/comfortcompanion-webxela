import express from 'express';
import { authenticateToken, isAdmin } from '../middleware/auth.js';
import {
  createOrder,
  getOrderById,
  getUserOrders,
  updateOrderStatus,
  addOrderTracking
} from '../controllers/orderController.js';

const router = express.Router();

// Protected routes
router.post('/', authenticateToken, createOrder);
router.get('/my-orders', authenticateToken, getUserOrders);
router.get('/:id', authenticateToken, getOrderById);
router.patch('/:id/status', authenticateToken, isAdmin, updateOrderStatus);
router.post('/:id/tracking', authenticateToken, isAdmin, addOrderTracking);

export default router;