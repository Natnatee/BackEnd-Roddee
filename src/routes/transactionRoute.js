import express from "express";
import transactionControl from "../controllers/transactionControl.js";

const router = express.Router();

router.delete("/:id", transactionControl.deleteTransaction);

// buy
router.post("/", transactionControl.createTransaction);

export default router;
