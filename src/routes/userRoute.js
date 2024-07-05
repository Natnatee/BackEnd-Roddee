import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

// API - 1 Post
router.post("/", userController.createUser);
router.put("/", userController.editUser);

export default router;
