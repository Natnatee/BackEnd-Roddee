import TemporaryCar from "../models/temporaryCar";
const getCarById = async (id) => {
  try {
    const car = await TemporaryCar.findById(id); // ใช้ findById เพื่อค้นหารถตาม id
    console.log("ServiceCar", car);
    return car;
  } catch (error) {
    throw new Error("Error fetching car");
  }
};

export default { getCarById };
