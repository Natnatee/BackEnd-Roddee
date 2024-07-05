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

  const deleteUserEmail = async (req, res, next) => {
    res.send('DELETE /api/users/:email');
  };
  
export { createUser, deleteUserEmail };
