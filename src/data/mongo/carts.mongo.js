import Manager from "./manager.mongo.js";
import Cart from "./models/carts.model.js";
import mongoose from "mongoose";
class CartsManager extends Manager {
  constructor() {
    super(Cart);
  }
  addProductToCart = async (product_id, user_id, quantity) => {
    try {
      const one = await this.create({ product_id, user_id, quantity });
      return one;
    } catch (error) {
      throw error;
    }
  };

  readProductsFromUser = async (user_id) => {
    try {
      const all = await this.read({ user_id, state: "reserved" });
      return all;
    } catch (error) {
      throw error;
    }
  };

  updateQuantity = async (cart_id, quantity) => {
    try {
      const one = await this.updateById(cart_id, { quantity });
      return one;
    } catch (error) {
      throw error;
    }
  };
  updateState = async (cart_id, state) => {
    try {
      const one = await this.updateById(cart_id, { state });
      return one;
    } catch (error) {
      throw error;
    }
  };
  removeProductFromCart = async (cart_id) => {
    try {
      const one = await this.destroyById(cart_id);
      return one;
    } catch (error) {
      throw error;
    }
  };
}


const cartsManager = new CartsManager();
export default cartsManager;