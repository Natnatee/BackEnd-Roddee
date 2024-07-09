import temporaryCarService from "../services/temporaryCarService.js";

const getCarById = async (req, res, next) => {
  try {
    const { id } = req.params; //ถ้าอยากเช็คให้
    console.log(id);
    const car = await temporaryCarService.getCarById(id); //carService.getCarById จะไปตามหาค่าที่เราส่งไปขอ
    res.status(200).json({ car });
  } catch (error) {
    next(error);
  }
};

//delete car temp
const deleteCarById = async (req, res, next) => {
  const id = req.params;
  console.log("id at control", id);
  const result = await temporaryCarService.deleteCarById(id);
  res.status(200).json({ message: "delete car complete", data: result });
};

const getAllCars = async (req, res, next) => {
  try {
    const cars = await temporaryCarService.getAllCars();
    res.status(200).json({ cars });
  } catch (error) {
    next(error);
  }
};

export default { getCarById, deleteCarById, getAllCars,  };
