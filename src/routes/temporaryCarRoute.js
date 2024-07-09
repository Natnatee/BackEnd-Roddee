import express from "express";
import temporaryCarController from "../controllers/temporaryCarController.js";

const router = express.Router();

router.get("/:id", temporaryCarController.getCarById);

// delete temp
router.delete("/:id", temporaryCarController.deleteCarById);

router.get("/", temporaryCarController.getAllCars);

export default router;
