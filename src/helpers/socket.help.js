import UsersManager from "../data/mongo/users.mongo.js";
import { socketServer } from "../../index.js";
import ProductsManager from "../data/mongo/products.mongo.js";


async function socketHelper(socket) {
  console.log("SOCKET ID: " + socket.id);

  // Emitir usuarios al conectar
  const users = await UsersManager.read();
  socket.emit("users", users);

  // Emitir productos al conectar
  const products = await ProductsManager.read();
  socket.emit("products", products);

  // Escuchar nuevos usuarios
  socket.on("new user", async (data) => {
    await UsersManager.create(data);
    const users = await UsersManager.read();
    socketServer.emit("users", users);
  });

    // Escuchar nuevos productos
    socket.on("new product", async (data) => {
      await ProductsManager.create(data);
      const products = await ProductsManager.read();
      socket.emit("products", products);
    });
}

export default socketHelper;