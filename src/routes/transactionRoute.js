import express from "express";
import transactionControl from "../controllers/transactionControl.js";

const router = express.Router();

router.delete("/:id", transactionControl.deleteTransaction);

export default router;
