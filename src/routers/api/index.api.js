import { Router } from "express";
import productsRouter from "./products.api.js";
import usersRouter from "./users.api.js";
import cartsRouter from "./carts.api.js";

const router = Router();

// Conectar los routers de productos y usuarios
router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use("/carts", cartsRouter)

export default router;
