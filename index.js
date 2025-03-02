import "dotenv/config.js"
import { createServer } from "http";
import { Server as SocketServer } from "socket.io";
import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import __dirname from "./utils.js";
import router from "./src/routers/index.router.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import socketHelper from "./src/helpers/socket.help.js";
import connectMongo from "./src/helpers/mongo.help.js";


//express server
const app = express();
const port = process.env.SERVER_PORT;
const ready= async()=>{
    console.log("Server ready on port "+port);
    await connectMongo(process.env.MONGO_URL)
}
const httpServer = createServer(app)
httpServer.listen(port,ready);

//socket server
const socketServer = new SocketServer(httpServer);
socketServer.on("connection", socketHelper)
export { socketServer }

// Middlewares globales
app.use(morgan("dev"));
app.use(express.json()); // Procesar JSON
app.use(express.urlencoded({ extended: true })); // Procesar formularios
app.use(express.static("public"))

/* engine settings */
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/src/views");

// Rutas 
app.use("/", router);
app.use(pathHandler);
app.use(errorHandler);


