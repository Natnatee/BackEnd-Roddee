import express from 'express';
import * as carController from '../controllers/carController.js';

const router = express.Router();

// API - 1 Post
router.post('/', carController.createCar);

// API - Get Car By ID
// router.get('/:id', carController.getCarById);
router.get("/test", (req, res, next) => {
    res.status(222).json({ message: "Luffy Gear 5" });
  });


export default router;