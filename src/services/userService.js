import User from "../models/user.js";

const createUser = async (data) => {
  const user = new User(data);
  await user.save();
  return user;
};

const deleteUserEmail = async (profile) => { // ฟังก์ชัน asynchronous เพื่อลบ user
  const user = await User.findOneAndDelete({ Email: profile }); // ใช้ findOneAndDelete เพื่อลบ user ตาม Email
  return user; // ส่งคืน user ที่ลบ
};

export default { createUser, deleteUserEmail };
