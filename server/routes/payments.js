import express from 'express';
import { authenticateToken, isAdmin } from '../middleware/auth.js';
import {
  createPaymentIntent,
  handleWebhook,
  getPaymentStatus,
  refundPayment
} from '../controllers/paymentController.js';

const router = express.Router();

// Webhook route (needs raw body)
router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);

// Protected routes
router.post('/create-payment-intent', authenticateToken, createPaymentIntent);
router.get('/:id/status', authenticateToken, getPaymentStatus);
router.post('/:id/refund', authenticateToken, isAdmin, refundPayment);

export default router;