import temporaryCarService from "../services/temporaryCarService";

const getCarById = async (req, res, next) => {
  try {
    const { id } = req.params; //ถ้าอยากเช็คให้
    console.log(id);
    const car = await temporaryCarService.getCarById(id); //carService.getCarById จะไปตามหาค่าที่เราส่งไปขอ
    res.status(200).json({ message: car });
  } catch (error) {
    next(error);
  }
};

export default { getCarById };
