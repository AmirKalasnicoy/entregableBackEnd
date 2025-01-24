import ProductsManager from "../data/fs/products.fs.js";

const productsManager = new ProductsManager();

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await productsManager.readFile();
    res.status(200).json({
      status:200,
      message:"Products retrived successfully",
      data:products
    })
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const product = await productsManager.readOne(pid);
    if (!product) {
      res.status(404).json({
        status: 404,
        message: "Product not found",
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "Product retrieved successfully",
        data: product,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const newProduct = await productsManager.create(req.body);
    res.status(201).json({
      status:201,
      message:"Product created successfully",
       id: newProduct._id 
      });
  } catch (error) {
    next(error);
  }
};

export const updateOne = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const updatedProduct = await productsManager.updateOne(pid, req.body);
    res.status(200).json({
      status:200,
      message:"Product updated successfully",
      data:updatedProduct
    })
  } catch (error) {
    next(error);
  }
};

export const destroyOne = async (req, res, next) => {
  try {
    const { pid } = req.params;
    await productsManager.destroyOne(pid);
    res.status(200).json({ 
      status:200,
      message:"Product deleted successfully",
      id: pid
     });
  } catch (error) {
    next(error);
  }
};
