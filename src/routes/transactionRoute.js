import express from "express";
import transactionControl from "../controllers/transactionControl.js";

const router = express.Router();

router.delete("/:id", transactionControl.deleteTransaction);

// buy
router.post("/", transactionControl.createTransaction);

router.get('/user/:Id', transactionControl.getTransactionsByUser); // Id matches the controller

export default router;
