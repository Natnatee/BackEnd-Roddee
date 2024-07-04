import express from 'express';
import * as carController from '../controllers/carController.js';

const router = express.Router();

// API - 1 Post
router.post('/', carController.createCar);
router.get("/Car-New",carController.carLastest)


export default router;

