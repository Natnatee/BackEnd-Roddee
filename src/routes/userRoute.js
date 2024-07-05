import express from 'express';
import * as userController from "../controllers/userController.js";

const router = express.Router();

// API - 1 Register
router.post("/register", userController.createUser);
// API - 2 Login


// API - SoftDelete
router.delete("/:email", userController.deleteUserEmail);

export default router;
