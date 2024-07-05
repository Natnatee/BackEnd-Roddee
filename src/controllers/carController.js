import carService from '../services/carService.js';

// API - Create Car
const createCar = async (req, res, next) => {
    try {
        const { headline, brand, model, type, year, mileage, color, fuel, enginecap, cushion, seat, gear, price, pnumber, address, additionalInfo, file1, file2, file3, file4, file5, file6 } = req.body;
        const data = { headline, brand, model, type, year, mileage, color, fuel, enginecap, cushion, seat, gear, price, pnumber, address, additionalInfo, file1, file2, file3, file4, file5, file6 };
        const car = await carService.createCar(data);

        res.status(201).json({ message: 'Car Created', data: car });
    } catch (error) {
        next(error);
    }
};

// API - Get Car By ID
const getCarById = async (req, res, next) => {
    try {
        const { id } = req.params; //ถ้าอยากเช็คให้
        console.log(id)
        const car = await carService.getCarById(id); //carService.getCarById จะไปตามหาค่าที่เราส่งไปขอ
        res.status(200).json({ message: car });
    } catch (error) {
        next(error);
    }
};

export { createCar, getCarById };