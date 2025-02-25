import Manager from "./manager.mongo.js";
import Product from "./models/products.model.js";

const productsManagers = new Manager(Product);
export default productsManagers;