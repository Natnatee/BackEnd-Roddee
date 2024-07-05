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

export { createUser, editUser };
