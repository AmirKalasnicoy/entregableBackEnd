import { Router } from "express";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../../controllers/products.controller.js";
import validateProduct from "../../middlewares/validate.products.js";
const router = Router();

// Rutas de productos
router.get("/", getAllProducts); 
router.get("/:pid", getProductById); 
router.post("/", validateProduct, createProduct);
router.put("/:pid", validateProduct, updateProduct);
router.delete("/:pid", deleteProduct); 

export default router;
