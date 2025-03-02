import { Router } from "express";
import { create, read, readById, updateById, destroyById, paginate } from "../../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/", create);
productsRouter.get("/", read);
productsRouter.get("/pages", paginate);
productsRouter.get("/:product_id", readById);
productsRouter.put("/:product_id", updateById);
productsRouter.delete("/:product_id", destroyById);

export default productsRouter;