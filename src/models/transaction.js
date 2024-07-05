import mongoose from "mongoose";

const transacSchema = new mongoose.Schema({
    headline: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    fuel: {
      type: String,
      required: true,
    },
    enginecap: {
      type: Number,
      required: true,
    },
    cushion: {
      type: String,
      required: true,
    },
    seat: {
      type: Number,
      required: true,
    },
    gear: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    pnumber: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    additionalInfo: {
      type: String,
      required: false,
    },
    
    createOn: { type: Date, default: new Date().getTime() },
  });
  
  const Transaction = mongoose.model("Transaction", transacSchema, "Transactions");
  
  export default Transaction;