import carListService from "../services/carListService.js";

const getcar = async (req, res, next) => {
  const id = req.params;
  console.log(id, "hello");
  const result = await carListService.getcar(id);
  res.status(200).json({ message: result });
};

export default { getcar };
