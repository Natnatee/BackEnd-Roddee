import userService from "../services/userService.js";

// API - Create User
const createUser = async (req, res, next) => {
  try {
    const {
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
    const user = await userService.createUser(data);

    res.status(201).json({ message: "Create User", data: user });
  } catch (error) {
    next(error);
  }
};

// API - Forget Password
const forgetPassword = async (req, res, next) => {
  try {
    
    const { Email } = req.body; 
    
    console.log("Email from request:", Email);
    const existUser = await userService.getUserByEmail(Email);
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

export { createUser, forgetPassword };

