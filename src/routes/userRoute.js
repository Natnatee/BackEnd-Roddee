import express from 'express';
import * as userController from "../controllers/userController.js";

const router = express.Router();

// API - 1 Post
router.post("/", userController.createUser);

//API - Forget Password
router.post("/password", userController.forgetPassword);


export default router;
