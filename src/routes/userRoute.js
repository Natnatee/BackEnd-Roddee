import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

// API - 1 Register
router.post("/register", userController.createUser);
// API - 2 Login
router.post("/login", userController.login);
// API OrderPinned
router.get("/Top-Car", userController.orderPinned)

//API -   Edit
router.put("/", userController.editUser);

//API - Forget Password
router.post("/password", userController.forgetPassword);

// Api -get profile by id 
router.get("/profile/:id",userController.viewprofilebyID)

// api get profile all 
router.get("/profile",userController.viewprofile)

// api delect cat fav 
router.delete("/delete/:id/:pinnedArray",userController.deleteFav)


export default router;
