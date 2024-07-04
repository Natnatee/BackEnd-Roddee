import carService from '../services/carService.js';


// API - Create Car
const createCar = async (req, res, next) => {
    try {
        const { headline, brand, model, type, year, mileage, color, fuel, enginecap, cushion, seat, gear, price, pnumber, address, additionalInfo, file1, file2, file3, file4, file5, file6 } = req.body;
        const data = { headline, brand, model, type, year, mileage, color, fuel, enginecap, cushion, seat, gear, price, pnumber, address, additionalInfo, file1, file2, file3, file4, file5, file6 };
        const car = await carService.createCar(data);

        res.status(201).json({ message: 'Create Car', data: car });
    } catch (error) {
        next(error);
    }
};

 
// API - RANDOM

const randomAllCars = async (req, res, next) => {

        try {
            
            const result = await carService.randomCars();
            res.status(201).json({ message: 'Random car success', result});
            } catch (error) {
                next(error);
            }
        };

export { createCar, randomAllCars };
