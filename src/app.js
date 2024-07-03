import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());  // เปิดใช้งาน CORS
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Connect to database
connectDB();

export default app;
