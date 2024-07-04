// carService.js
import Car from "../models/Car.js";

const createCar = async (data) => {
  const car = new Car(data);
  await car.save();
  return car;
};

const randomCars = async () => {
  const randomCar = await Car.aggregate([{ $sample: { size: 6 } }]);
  return randomCar;
};

export default { createCar, randomCars };
