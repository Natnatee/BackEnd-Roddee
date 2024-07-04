import express from "express";
import * as carController from "../controllers/carController.js";
import Car from "../models/Car.js";

const router = express.Router();

// API - 1 Post
router.post("/", carController.createCar);
router.get("/Car-New", carController.carLastest);
router.get("/searchbar", carController.searchCar);

export default router;
