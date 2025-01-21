import UsersManager from "../data/fs/users.fs.js";

const usersManager = new UsersManager();

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await usersManager.read();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const { uid } = req.params;
    const user = await usersManager.readOne(uid);
    if (!user) throw new Error(`User with ID ${uid} not found`);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const newUser = await usersManager.create(req.body);
    res.status(201).json({ id: newUser._id });
  } catch (error) {
    next(error);
  }
};
