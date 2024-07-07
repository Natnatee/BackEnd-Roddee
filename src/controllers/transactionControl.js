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

export default { deleteTransaction, addTransaction,patchUpdate};
