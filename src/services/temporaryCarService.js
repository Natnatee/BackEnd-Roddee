import TemporaryCar from "../models/temporaryCar.js";

const getCarById = async (id) => {
  try {
    const car = await TemporaryCar.findById(id); // ใช้ findById เพื่อค้นหารถตาม id
    console.log("ServiceCar", car);
    return car;
  } catch (error) {
    throw new Error("Error fetching car");
  }
};

const deleteCarById = async (idObject) => {
  const id = idObject.id;
  console.log("sending id:", id);
  const result = await TemporaryCar.findByIdAndDelete(id);
  console.log(result);
  return result;
};


export default { getCarById, deleteCarById };
