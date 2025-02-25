import ProductsManager from "../data/mongo/products.mongo.js";
import cartsManager from "../data/mongo/carts.mongo.js";
import UsersManager from "../data/mongo/users.mongo.js";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";


const indexView = async (req, res, next) => {
  try {
      const products = await ProductsManager.read();
      console.log("Productos obtenidos:", products); 
      return res.render("index", { title: "Página principal", products });
  } catch (error) {
      next(error);
  }
};


const productView = async (req, res, next) => {
  try {
    const { pid } = req.params;
    if (!ObjectId.isValid(pid)) {
        return res.status(400).send("ID de producto inválido");
    }
    
    const one = await ProductsManager.readById(pid); 
    if (!one) {
        return res.status(404).send("Producto no encontrado");
    }

    const data = {
      title: "Product Detail",
      product: one,
    };
    return res.status(200).render("product", data);
  } catch (error) {
    console.error("❌ Error en productView:", error);
    next(error);
  }
};


const cartView = async (req, res) => {
  try {
      const userId = "ID_DEL_USUARIO";
      const userCart = await cartsManager.getCartByUserId(userId);

      if (!userCart || userCart.products.length === 0) {
          return res.render("cart", { cartEmpty: true });
      }

      res.render("cart", {
          products: userCart.products.map(p => ({
              title: p.product.title,
              price: p.product.price,
              quantity: p.quantity
          }))
      });
  } catch (error) {
      console.error("Error cargando carrito:", error);
      res.status(500).send("Error interno del servidor");
  }
};



const profileView = async (req, res) => {
    try {
        const { id } = req.params;

        // 🛑 Verifica si el ID tiene el formato correcto antes de convertirlo
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("ID de usuario inválido");
        }

        const userId = new mongoose.Types.ObjectId(id);
        const user = await UsersManager.readById(userId);

        if (!user) {
            return res.render("profile", { notFound: true });
        }

        res.render("profile", {
            name: user.name,
            email: user.email,
            role: user.role
        });
    } catch (error) {
        console.error("Error cargando perfil:", error);
        res.status(500).send("Error interno del servidor");
    }
};



const registerView = (req, res, next) => {
  try {
    const data = {
      title: "Real register",
    };
    return res.status(200).render("realRegister", data);
  } catch (error) {
    next(error);
  }
};


const realProductsView = async (req, res, next) => {
  try {
    const products = await ProductsManager.read(); 

    if (!products || products.length === 0) {
      return res.status(404).send("No hay productos disponibles");
    }
    
    const data = {
      title: "Real-Time Products",
      products,
    };
    return res.status(200).render("realProducts", data);
  } catch (error) {
    console.error("❌ Error en realProductsView:", error);
    next(error);
  }
};

export { indexView, productView, cartView, profileView, registerView, realProductsView };

