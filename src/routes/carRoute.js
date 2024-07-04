import express from "express";
import * as carController from "../controllers/carController.js";

const router = express.Router();

// API - 1 Post
router.post("/", carController.createCar);

// API - RANDOM
router.get("/car-random", carController.randomAllCars);

// API -

export default router;
