// carService.js
import Car from '../models/Car.js';

const createCar = async (data) => {
    const car = new Car(data);
    await car.save();
    return car;
};

// lastest car 
const carLast = async()=>{
    const lastest =  await Car.find().sort({ year: -1 });
    return lastest;
}

export default { createCar,carLast};

