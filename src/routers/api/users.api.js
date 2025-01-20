import { Router } from "express";
import { getAllUsers, getUserById, createUser } from "../../controllers/users.controller.js";

const router = Router();

// Rutas de usuarios
router.get("/", getAllUsers); // Obtener todos los usuarios
router.get("/:uid", getUserById); // Obtener un usuario por ID
router.post("/", createUser); // Crear un usuario

export default router;
