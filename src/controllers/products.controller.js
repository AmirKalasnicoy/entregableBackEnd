import ProductsManager from "../data/mongo/products.mongo.js";


const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductsManager.readFile();
    res.status(200).json({
      status:200,
      message:"Products retrived successfully",
      data:products
    })
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const product = await ProductsManager.readOne(pid);
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

const createProduct = async (req, res, next) => {
  try {
    const newProduct = await ProductsManager.create(req.body);
    res.status(201).json({
      status:201,
      message:"Product created successfully",
       id: newProduct._id 
      });
  } catch (error) {
    next(error);
  }
};

const updateOne = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const updatedProduct = await ProductsManager.updateOne(pid, req.body);
    res.status(200).json({
      status:200,
      message:"Product updated successfully",
      data:updatedProduct
    })
  } catch (error) {
    next(error);
  }
};

const destroyOne = async (req, res, next) => {
  try {
    const { pid } = req.params;
    await ProductsManager.destroyOne(pid);
    res.status(200).json({ 
      status:200,
      message:"Product deleted successfully",
      id: pid
     });
  } catch (error) {
    next(error);
  }
};
export {getAllProducts,getProductById,createProduct,updateOne,destroyOne}