import express from 'express';
import User from '../models/user.js';
import * as userContriller from "../controllers/userController.js"

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    // try {
    //     const users = await User.find();
    //     res.json(users);
    // } catch (error) {
    //     res.status(500).json({ message: error.message });
    // }
    res.status(200).json({message})
});

// Add a new user
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Api -get profile by id 
router.get("/profile/:id",userContriller.viewprofilebyID)

// api get profile all 
router.get("/profile",userContriller.viewprofile)

export default router;
