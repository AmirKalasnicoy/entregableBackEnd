import { Router } from "express";
import {
  indexView,
  productView,
  cartView,
  registerView,
  profileView,
  realProductsView,
} from "../controllers/views.controller.js";

const viewsRouter = Router();

viewsRouter.get("/", indexView);
viewsRouter.get("/product/:pid", productView);
viewsRouter.get("/cart", cartView);
viewsRouter.get("/register",registerView)
viewsRouter.get("/products", realProductsView);
viewsRouter.get("/profile/:uid", profileView);

export default viewsRouter;