import User from "../models/user.js";
import Car from "../models/Car.js";

const getcar = async (id) => {
  const newId = id.id;
  console.log("service Id", newId);
  const user = await User.findById(newId);
  console.log("service user:", user);
  const cars = await Car.find({ _id: { $in: user.pinned } });
  return cars;
};

export default { getcar };
