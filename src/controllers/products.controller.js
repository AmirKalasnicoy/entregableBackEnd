import ProductsManager from "../data/fs/products.fs.js";

const productsManager = new ProductsManager();

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await productsManager.read();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const product = await productsManager.readOne(pid);
    if (!product) throw new Error(`Product with ID ${pid} not found`);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const newProduct = await productsManager.create(req.body);
    res.status(201).json({ id: newProduct._id });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const updatedProduct = await productsManager.update(pid, req.body);
    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { pid } = req.params;
    await productsManager.destroy(pid);
    res.status(200).json({ id: pid });
  } catch (error) {
    next(error);
  }
};
