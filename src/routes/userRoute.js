import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

// API - 1 Register
router.post("/register", userController.createUser);
// API - 2 Login
router.post("/login", userController.login);
// API - 3 Verify Email
router.get("/verify-email", userController.verifyEmail);
// API - 1 RegisterForAdmin
router.post("/registerForAdmin", userController.createUserForAdmin);
// API OrderPinned
router.get("/Top-Car", userController.orderPinned);
// API - Edit
router.put("/", userController.editUser);

//API - Forget Password
router.post("/password", userController.forgetPassword);


export default router;
