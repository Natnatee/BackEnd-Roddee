import express from "express";
import carlistController from "../controllers/carlistController.js";

const router = express.Router();

router.get("/:id", carlistController.getcar);

export default router;
