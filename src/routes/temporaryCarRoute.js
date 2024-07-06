import express from "express";
import temporaryCarController from "../controllers/temporaryCarController.js";

const router = express.Router();

router.get("/:id", temporaryCarController.getCarById);

export default router;
