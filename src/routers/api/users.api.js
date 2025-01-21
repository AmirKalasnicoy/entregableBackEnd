import { Router } from "express";
import { getAllUsers, getUserById, createUser, updateUser,deleteUser } from "../../controllers/users.controller.js";
import validateUser from "../../middlewares/validate.users.js"; 
const router = Router();

// Rutas de usuarios
router.get("/", getAllUsers);
router.get("/:uid", getUserById);
router.post("/", validateUser, createUser); 
router.put("/:uid", validateUser, updateUser); 
router.delete("/:uid", deleteUser);

export default router;
