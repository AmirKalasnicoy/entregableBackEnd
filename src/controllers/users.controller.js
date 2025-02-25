import UsersManager from "../data/mongo/users.mongo.js";


const getAllUsers = async (req, res, next) => {
  try {
    const users = await UsersManager.readAll();
    res.status(200).json({
      status:200,
      message:"All users retrieved successfully",
      data:users
    });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { uid } = req.params;
    const user = await UsersManager.readOne(uid);
    if (!user) {
      return res.status(404).json({
        status:404,
        message:`Users with ID ${uid} not found`,
      })
    }
    res.status(200).json({
      status:200,
      message:"User retrieved successfully",
      data:user
    })
  
  } catch (error) {
    next(error);
  }
};
 const createUser = async (req, res, next) => {
  try {
    const newUser = await UsersManager.create(req.body);
    res.status(201).json({ 
      status:201,
      message:"New user created successfully",
      id: newUser._id 
    });
  } catch (error) {
    next(error); 
  }
};


const deleteUser = async (req, res, next) => {
  try {
    const { uid } = req.params; 
    const deletedUser = await UsersManager.destroyOne(uid); 
    res.status(200).json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    next(error); 
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { uid } = req.params; 
    const updatedData = req.body; 
    const updatedUser = await UsersManager.updateOne(uid, updatedData); 
    if (!updateUser){
      return res.status(404).json({
        status:404,
        message:`User with ID ${uid} not found`,
      })
    }
    res.status(200).json({
      status:200,
      message:"User update successfully",
      data:updatedUser
    })
  } catch (error) {
    next(error); 
  }
};

export{getAllUsers,getUserById,createUser,deleteUser,updateUser}