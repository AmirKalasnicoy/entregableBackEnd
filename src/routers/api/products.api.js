import { Router } from "express";
import { getAllProducts, getProductById, createProduct, updateOne, destroyOne } from "../../controllers/products.controller.js";
import validateProduct from "../../middlewares/validate.products.js";
const router = Router();

// Rutas de productos
router.get("/", getAllProducts); 
router.get("/:pid", getProductById); 
router.post("/", validateProduct, createProduct);
router.put("/:pid", updateOne);
router.delete("/:pid", destroyOne); 

export default router;
