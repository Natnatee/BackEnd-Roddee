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


//API - Add favourite car
// router.post("/:id/:pinnedID",userController.deleteFav)

// API - 8  Add movie to movie list
// router.post('/:movieListId/movies/:movieId', movieListController.addMovieToMovieList);



export default router;
