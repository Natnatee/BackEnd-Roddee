// carService.js
import { isValidObjectId } from 'mongoose';
import Car from '../models/Car.js';

const createCar = async (data) => {
    const car = new Car(data);
    await car.save();
    return car;
};
const getCarById = async (id) => {
  try {
    const car = await Car.findById(id); // ใช้ findById เพื่อค้นหารถตาม id
    return car;
  } catch (error) {
    throw new Error('Error fetching car');
  }
};

export default { createCar, getCarById };