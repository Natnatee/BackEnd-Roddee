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

const patchUpdate = async(req,res,next)=>{
  try {
    const id = req.params.id;
    const updateData = req.body
  const update = await transactionService.updateTransaction(id,updateData);
  if(!update){
    res.status(400).json({message:"Not found id"})
  }
  res.status(200).json(update)
  } catch (error) {
    next(error)
  }
}

export default { deleteTransaction, createTransaction,patchUpdate,addTransaction};
