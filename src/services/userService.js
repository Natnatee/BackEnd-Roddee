import User from "../models/user.js";

//API - Register
const createUser = async (data) => {
  const user = new User(data);
  await user.save();
  return user;
};

//API - Forget Password
const getUserByEmail = async (Email) => {
  const emailCheck = await User.findOne({ Email: Email });
  console.log("Email found:", emailCheck);
  return emailCheck;
};

export default { createUser, getUserByEmail };
