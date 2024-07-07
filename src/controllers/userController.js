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
  }
  
export { createUser,viewprofilebyID,viewprofile };
