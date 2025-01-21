import express from "express";
import morgan from "morgan";
import router from "./src/routers/index.router.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";

const app = express();
const port = 8080;
const ready = ()=> console.log(`server ready on port ${port}`);
app.listen(port,ready);

// Middlewares globales
app.use(morgan("dev"));
app.use(express.json()); // Procesar JSON
app.use(express.urlencoded({ extended: true })); // Procesar formularios
app.use(express.static("public"))

// Rutas 
app.use("/", router);
app.use(pathHandler); 
app.use(errorHandler); 


