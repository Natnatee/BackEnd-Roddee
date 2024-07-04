import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log("MONGODB_URI check🚢:", process.env.MONGODB_URI);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};



export default connectDB;
