import express from 'express';
import * as userController from "../controllers/userController.js";

const router = express.Router();

// API - 1 Register
router.post("/register", userController.createUser);
// API - 2 Login

//API - Forget Password
router.post("/password", userController.forgetPassword);


export default router;
