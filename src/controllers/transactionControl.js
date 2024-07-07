import transactionService from "../services/transactionService.js";


const deleteTransaction = async (req, res, next) => {
  const id = req.params;
  console.log("id at control", id);
  const result = await transactionService.deleteTransaction(id);
  res.status(200).json({ message: "delete complete", data: result });
};


// Order Complete
const createTransaction = async (req, res, next) => {
  
  try {
    const { Product_Id, Purchase_User } = req.body;
    const transaction = await transactionService.createTransaction({Product_Id, Purchase_User});
    
    res.status(201).json({message: "Order Complete", transaction});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { deleteTransaction, createTransaction };




