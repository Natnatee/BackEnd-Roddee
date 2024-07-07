import User from "../models/user.js";

const createUser = async (data) => {
  const user = new User(data);
  await user.save();
  return user;
};

const profileID = async(user_id)=>{
  const viewid = await User.findOne({_id:user_id})
  return viewid
};

const profile = async()=>{
  const view = await User.find()
  return view
}

export default { createUser,profileID,profile };
