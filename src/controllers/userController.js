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


export { createUser, login, orderPinned };
