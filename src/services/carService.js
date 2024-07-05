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

const searchCar = async (query) => {
  if (query === "") {
    return { message: "not found" };
  }
const searchQuery = { $or: [] };
  let searchableFields = [];
  console.log(typeof query);
  if (typeof query == "string") {
    searchableFields = [
      "headline",
      "brand",
      "model",
      "type",
      "color",
      "fuel",
      "cushion",
      "gear",
      "pnumber",
      "address",
      "additionalInfo",
      "file1",
      "file2",
      "file3",
      "file4",
      "file5",
      "file6",
    ];
    searchableFields.forEach((field) => {
      searchQuery.$or.push({ [field]: new RegExp(query, "i") });
    });
  } else {
    searchableFields = ["year", "mileage", "enginecap", "seat", "price"];
    searchableFields.forEach((field) => {
      searchQuery.$or.push({ [field]: query });
    });
  }

  const cars = await Car.find(searchQuery);
  console.log(cars);
  return cars;
};

// lastest car
const carLast = async () => {
  const lastest = await Car.find().sort({ year: -1 });
  return lastest;
};

// carService.js
const carBrand = async (brand) => {
  try {
    const brand = await Car.findById(brand); // ใช้ findById เพื่อค้นหารถตาม id
    console.log("ServiceCar", car);
    return brand;
  } catch (error) {
    throw Error("Error fetching car");
  }
};


export default {
  createCar,
  carLast,
  searchCar,
  randomCars,
  getCarById,
  carBrand,
};
