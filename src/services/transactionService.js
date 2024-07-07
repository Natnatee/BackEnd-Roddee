import Transaction from "../models/transaction.js";

const deleteTransaction = async (idObject) => {
  const id = idObject.id;
  console.log("sending id:", id);
  const result = await Transaction.findByIdAndDelete(id);
  console.log(result);
  return result;
};

const updateTransaction = async(id,updateData)=>{
  const result = await Transaction.findByIdAndUpdate(id,updateData,{ new: true })
  return result
}
export default { deleteTransaction,updateTransaction};
