// carService.js
import Car from '../models/Car.js';

const createCar = async (data) => {
    const car = new Car(data);
    await car.save();
    return car;
};

export default { createCar };