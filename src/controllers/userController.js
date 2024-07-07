import userService from "../services/userService.js";
import { hashPassword, comparePassword } from '../utils/hash.js';
import { sign } from '../utils/token.js';
import BadRequestError from '../error/BadRequestError.js';

// API - Create User
const createUser = async (req, res, next) => {
  try {
    const { FirstName, LastName, Email, Password, pnumber, Profile_Image, pinned, confirmPassword } = req.body;
    // Validate required fields
    if (!FirstName) throw new BadRequestError('First name is required');
    if (!LastName) throw new BadRequestError('Last name is required');
    if (!Email) throw new BadRequestError('Email is required');
    if (!Password) throw new BadRequestError('Password is required');
    if (!confirmPassword) throw new BadRequestError('Confirm password is required');
    if (!Profile_Image) throw new BadRequestError('Profile image is required');
    // Check if password and confirmPassword match
    if (Password !== confirmPassword) {throw new BadRequestError('Password does not match');}
    // Check if email already exists
    const userCheckMail = await userService.getUserByEmail(Email);
    if (userCheckMail) throw new BadRequestError('Email already exists');
    // Hash password
    const hashedPassword = await hashPassword(Password);
    // Create user
    const newUser = await userService.createUser({ FirstName, LastName, Email, Password: hashedPassword, Profile_Image, isAdmin:false, pinned, pnumber });
    // Generate token
    const token = sign({ id: newUser.id });

    res.status(201).json({ message: "Create User", data: newUser, access_token: token });
  } catch (error) {
    next(error);
  }
};

// API : Login
const login = async (req, res, next) => {
  try {
    const { Email, Password } = req.body;
    // Find user by email
    const user = await userService.getUserByEmail(Email);
    if (!user) throw new BadRequestError('Invalid Email');
    // Compare password
    const isMatch = await comparePassword(Password, user.Password);
    if (!isMatch) throw new BadRequestError('Invalid Password');
    // Generate token
    const token = sign({ id: user.id });
    delete user.Password;

    res.status(200).json({ message: 'Login success', data: user, access_token: token });
  } catch (error) {
    next(error);
  }
};

//API : orderPinned
const orderPinned = async (req, res, next) => {
  try {
    const Order = await userService.topPinned();
    const newOrder = Order.map(order => order._id);
    res.status(200).json({ data: newOrder });
  } catch (error) {
    next(error);
  }
}


const editUser = async (req, res, next) => {
  try {
    const {
      _id,
      FirstName,
      LastName,
      Email,
      Password,
      Profile_Image,
      isAdmin,
      pinned,
    } = req.body;
    const data = {
      FirstName,
      LastName,
      Email,
      Password,
      Profile_Image,
      isAdmin,
      pinned,
    };

    const user = await userService.editUser(_id, data);

    res.status(201).json({ message: "Edit data", data: user });
  } catch (error) {
    next(error);
  }
};

// API - Forget Password
const forgetPassword = async (req, res, next) => {
  try {
    
    const { Email } = req.body; 
    
    console.log("Email from request:", Email);
    const existUser = await userService.getRecoverByEmail(Email);
    if (!existUser) {
      return res.status(400).json({ message: "Email not found" });
    }
   
    res.status(201).json({
      message: "Send User ID Success",
      data: Email,
      userId: existUser._id 
    });

    // const newPassword = await userService.forgetUser(id);
    // res.status(201).json({ message: "Password send to email" });
    // res.status(201).json({ message: "Password send to email", data: user });
  } catch (error) {
    next(error);
  }
};

// user profile 
  const viewprofilebyID = async(req,res,next)=>{
    try {
      const user_id = req.params.id
      const viewid =await userService.profileID(user_id)
      if(!viewid){
        res.status(404).json({message:"Not found user"})
      }
     res.status(200).json(viewid)
    } catch (error) {
      res.status(400).json({message:"ดูดีๆ"})
    }
  };

  const viewprofile = async(req,res,next)=>{
    try {
      const viewall = await userService.profile()
      res.status(201).json(viewall)
    } catch (error) {
      res.status(400).json({message:"error viewprofile"})
    }
  };

  // delete fav
  const deleteFav = async(req,res,next)=>{
    try {
      const user_id = req.params.id
      const delectpinnedArray = req.params.pinnedArray   
      const pinnedID = req.params.pinnedID
      const delect = await userService.delectcarlist(user_id,delectpinnedArray)
      res.status(400).json({message:"delect success",pinnedID,delect})
    } catch (error) {
      next(error)
    }
  }
  
export { createUser,viewprofilebyID,viewprofile, editUser, login, orderPinned, forgetPassword,deleteFav};
