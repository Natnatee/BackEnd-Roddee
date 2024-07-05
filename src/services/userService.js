import User from "../models/user.js";

const createUser = async (data) => {
  const user = new User(data);
  await user.save();
  return user;
};

const editUser = async (_id, data) => {
  const user = await User.findOneAndUpdate({ _id }, data, { new: true });
  console.log(user);
  return user;
};

export default { createUser, editUser };
