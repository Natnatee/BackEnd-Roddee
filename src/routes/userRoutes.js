import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    // try {
    //     const users = await User.find();
    //     res.json(users);
    // } catch (error) {
    //     res.status(500).json({ message: error.message });
    // }
    res.status(200).json({message:"ok"})
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

export default router;
