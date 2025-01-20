import { Router } from "express";
import apiRouter from "./api/index.api.js";

const router = Router();

// Conectar el router principal de la API
router.use("/api", apiRouter);

export default router;
