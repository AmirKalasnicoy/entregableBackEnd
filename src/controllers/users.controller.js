import usersManager from "../data/mongo/users.mongo.js";

const create = async (req, res, next) => {
  try {
    const data = req.body;
    const one = await usersManager.create(data);
    return res.status(201).json({
      method: req.method,
      url: req.url,
      response: one,
    });
  } catch (error) {
    next(error);
  }
};
const read = async (req, res, next) => {
  try {
    const filter = req.query;
    const all = await usersManager.read(filter);
    if (all.length > 0) {
      return res.status(200).json({
        method: req.method,
        url: req.url,
        response: all,
      });
    }
    const error = new Error("Not found");
    error.statusCode = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};
const readById = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const one = await usersManager.readById(user_id);
    if (one) {
      return res.status(200).json({
        method: req.method,
        url: req.url,
        response: one,
      });
    }
    const error = new Error("Not found");
    error.statusCode = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};
const updateById = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const data = req.body;
    const one = await usersManager.updateById(user_id, data);
    if (one) {
      return res.status(200).json({
        method: req.method,
        url: req.url,
        response: one,
      });
    }
    const error = new Error("Not found");
    error.statusCode = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};
const destroyById = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const one = await usersManager.destroyById(user_id);
    if (one) {
      return res.status(200).json({
        method: req.method,
        url: req.url,
        response: one,
      });
    }
    const error = new Error("Not found");
    error.statusCode = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const one = await usersManager.login(email, password);
    if (one) {
      return res.status(200).json({
        method: req.method,
        url: req.url,
        response: one._id,
      });
    }
    const error = new Error("Invalid credentials");
    error.statusCode = 401;
    throw error;
  } catch (error) {
    next(error);
  }
};

export { create, read, readById, updateById, destroyById, login };