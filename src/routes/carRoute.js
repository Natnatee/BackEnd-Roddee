import express from 'express';
import * as carController from '../controllers/carController.js';

const router = express.Router();

// API - 1 Post
router.post('/', carController.createCar);

export default router;