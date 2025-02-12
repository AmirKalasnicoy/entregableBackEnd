import { Router } from "express";
import apiRouter from "./api/index.api.js";
import viewsRouter from "./views.router.js";

const router = Router();

// Conectar el router principal de la API
router.use("/api", apiRouter);
router.use("/",viewsRouter)

export default router;
