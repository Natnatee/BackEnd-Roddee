// carService.js
import Car from "../models/Car.js";

const createCar = async (data) => {
  const car = new Car(data);
  await car.save();
  return car;
};

const getCarById = async (id) => {
  try {
    const car = await Car.findById(id); // ใช้ findById เพื่อค้นหารถตาม id
    console.log("ServiceCar", car);
    return car;
  } catch (error) {
    throw new Error("Error fetching car");
  }
};

const randomCars = async () => {
  const randomCar = await Car.aggregate([{ $sample: { size: 6 } }]);
  return randomCar;
};

const searchCar = async (searchQuery) => {
  const cars = await Car.find(searchQuery);
  console.log(cars);
  return cars;
};

// lastest car
const carLast = async () => {
  const lastest = await Car.find().sort({ year: -1 });
  return lastest;
};

export default { createCar, carLast, searchCar, randomCars, getCarById };
