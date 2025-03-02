import { Router } from "express";
import { create, read, readById, updateById, destroyById, login } from "../../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.post("/", create);
usersRouter.get("/", read);
usersRouter.get("/:user_id", readById);
usersRouter.put("/:user_id", updateById);
usersRouter.delete("/:user_id", destroyById);
usersRouter.post("/login", login);

export default usersRouter;
