import Car from "../models/Car.js";
import carService from "../services/carService.js";

// API - Create Car
const createCar = async (req, res, next) => {
  try {
    const {
      headline,
      brand,
      model,
      type,
      year,
      mileage,
      color,
      fuel,
      enginecap,
      cushion,
      seat,
      gear,
      price,
      pnumber,
      address,
      additionalInfo,
      file1,
      file2,
      file3,
      file4,
      file5,
      file6,
    } = req.body;
    const data = {
      headline,
      brand,
      model,
      type,
      year,
      mileage,
      color,
      fuel,
      enginecap,
      cushion,
      seat,
      gear,
      price,
      pnumber,
      address,
      additionalInfo,
      file1,
      file2,
      file3,
      file4,
      file5,
      file6,
    };
    const car = await carService.createCar(data);

    res.status(201).json({ message: "Car Created", data: car });
  } catch (error) {
    next(error);
  }
};

// API - RANDOM

const randomAllCars = async (req, res, next) => {
  try {
    const result = await carService.randomCars();
    res.status(201).json({ message: "Random car success", result });
  } catch (error) {
    next(error);
  }
};

const searchCar = async (req, res, next) => {
  try {
    const query = req.body.query;
    const cars = await carService.searchCar(query);
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// car lastest
const carLastest = async (req, res, next) => {
  try {
    const last = await carService.carLast();
    res.json(last);
  } catch (error) {
    res.status(400).json({ message: "i here tu" });
  }
};

// API - Get Car By ID
const getCarById = async (req, res, next) => {
  try {
    const { id } = req.params; //ถ้าอยากเช็คให้
    const car = await carService.getCarById(id);
    res.status(200).json({ message: car });
  } catch (error) {
    next(error);
  }
};

const carBrand = async (req, res, next) => {
    try {
      const { brand } = req.params; // ดึงค่า 'brand' จาก params ของ request
      const carBrand = await carService.Car.carBrand(); // รอให้ฟังก์ชัน carBrand ของ carService ดึงข้อมูลและเก็บไว้ที่ตัวแปร carBrand
      res.status(200).json({ message: carBrand }); // ส่งค่า carBrand กลับไปที่ client ในรูปแบบ JSON
    } catch (error) {
      next(error); // หากเกิดข้อผิดพลาด ส่งข้อผิดพลาดไปยัง middleware ถัดไป
    }
  };
  

export {
  createCar,
  getCarById,
  searchCar,
  carLastest,
  randomAllCars,
  carBrand,
};
