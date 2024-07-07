import User from "../models/user.js";

//API - Register
const createUser = async (data) => {
  const user = new User(data);
  await user.save();
  return user;
};

<<<<<<< HEAD
//API - Forget Password
const getUserByEmail = async (Email) => {
  const emailCheck = await User.findOne({ Email: Email });
  console.log("Email found:", emailCheck);
  return emailCheck;
};

export default { createUser, getUserByEmail };
=======
const getUserByEmail = async (email) => {
  const user = await User.findOne({ Email: email });
  return user;
}

const topPinned = async () => {
  const orderPinned = await User.aggregate([
    { $unwind: "$pinned"},
    { $group: {
      _id : "$pinned",
      count : { $sum:1}
    }},
    { $sort: { count: -1}}
  ])
  console.log(orderPinned);
  return orderPinned
}

const editUser = async (_id, data) => {
  const user = await User.findOneAndUpdate({ _id }, data, { new: true });
  console.log(user);
  return user;
};

export default { createUser, getUserByEmail, topPinned, editUser };
>>>>>>> 26f79ae5195ff057bb88fe5936f5cfb5d84178ad
