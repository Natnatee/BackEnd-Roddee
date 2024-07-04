import express from "express";
import * as carController from "../controllers/carController.js";
import carService from "../services/carService.js";

const router = express.Router();

// API - 1 Post
router.post("/", carController.createCar);

// API - Get Car By ID
router.get('/:id', (req, res) => {
    res.send('GET /api/cars/:id');
  });
  
export default router;
