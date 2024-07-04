// carService.js
import { isValidObjectId } from 'mongoose';
import Car from '../models/Car.js';

const createCar = async (data) => {
    const car = new Car(data);
    await car.save();
    return car;
};
const getCarById = async (req, res, next) => {
  try {
    const { id } = req.params; // ดึงค่า id จาก request parameters
    const car = await carService.getCarById(id); // เรียกใช้บริการเพื่อค้นหาภาพยนตร์ตาม id
    if (!car) {
      throw new NotFoundError(`Car with id ${id} not found`); // โยนข้อผิดพลาดหากไม่พบภาพยนตร์
    }
    res.status(200).json({ message: 'Get Car By ID', data: car }); // ส่งผลลัพธ์กลับในรูปแบบ JSON หากพบภาพยนตร์
  } catch (error) {
    next(error); // ส่งต่อข้อผิดพลาดไปยัง middleware ถัดไป
  }
};

export default { createCar, getCarById };