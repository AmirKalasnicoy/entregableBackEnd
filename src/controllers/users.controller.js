import UsersManager from "../data/fs/users.fs.js";

const usersManager = new UsersManager();

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await usersManager.readAll();
    res.status(200).json({
      status:200,
      message:"All users retrieved successfully",
      data:users
    });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const { uid } = req.params;
    const user = await usersManager.readOne(uid);
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

export const createUser = async (req, res, next) => {
  try {
    const newUser = await usersManager.create(req.body);
    res.status(201).json({ 
      status:201,
      message:"New user created successfully",
      id: newUser._id 
    });
  } catch (error) {
    next(error); 
  }
};


export const deleteUser = async (req, res, next) => {
  try {
    const { uid } = req.params; 
    const deletedUser = await usersManager.destroyOne(uid); 
    res.status(200).json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    next(error); 
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { uid } = req.params; 
    const updatedData = req.body; 
    const updatedUser = await usersManager.updateOne(uid, updatedData); 
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
