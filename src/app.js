import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";
import morgan from "morgan";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";

import userRoutes from "./routes/userRoutes.js";
import carRoutes from "./routes/carRoute.js";
//Facilitate
dotenv.config();
const app = express();

// Middleware
app.use(cors()); // เปิดใช้งาน CORS
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// > Static Files

// Routes
app.use("/api/users", userRoutes);
app.use("/api/cars", carRoutes);

app.get("/test", (req, res, next) => {
  res.status(223).json({ message: "Luffy Gear 5" });
});

//Handle404

//Handle Error

// Connect to database
connectDB();

export default app;
