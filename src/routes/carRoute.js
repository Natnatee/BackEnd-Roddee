import express from "express";
import * as carController from "../controllers/carController.js";
import Car from "../models/Car.js";

const router = express.Router();

// API - 1 Post
router.post("/", carController.createCar);
router.get("/searchbar", carController.searchCar);

router.get("/test", (req, res, next) => {
  res.status(222).json({ message: "Luffy Gear 5" });
});

export default router;
