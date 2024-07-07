import transactionService from "../services/transactionService.js";

const deleteTransaction = async (req, res, next) => {
  const id = req.params;
  console.log("id at control", id);
  const result = await transactionService.deleteTransaction(id);
  res.status(200).json({ message: "delete complete", data: result });
};

const addTransaction = async (req, res, next) => {
  const id = req.params;
  console.log("id at control", id);
  const result = await transactionService.addTransaction(id);
  res.status(200).json({ message: "B", data: result });
};

export default { deleteTransaction, addTransaction };
