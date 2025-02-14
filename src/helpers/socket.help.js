import UsersManager from "../data/fs/users.fs.js";
import { socketServer } from "../../index.js";
import ProductsManager from "../data/fs/products.fs.js";

const usersManager = new UsersManager();
const productsManager = new ProductsManager();

async function socketHelper(socket) {
  console.log("SOCKET ID: " + socket.id);

  // Emitir usuarios al conectar
  const users = await usersManager.readAll();
  socket.emit("users", users);

  // Emitir productos al conectar
  const products = await productsManager.readAll();
  socket.emit("products", products);

  // Escuchar nuevos usuarios
  socket.on("new user", async (data) => {
    await usersManager.create(data);
    const users = await usersManager.readAll();
    /* socketServer emite a TODOS los sockets */
    socketServer.emit("users", users);
  });

    // Escuchar nuevos productos
    socket.on("new product", async (data) => {
      await productsManager.create(data);
      const products = await productsManager.readAll();
      socket.emit("products", products);
    });
}

export default socketHelper;