import { faker } from "@faker-js/faker";
import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("src/data/fs/files/products.json");

export default class ProductsManager {
  constructor() {
    this.path = filePath;
    this.init();
  }

  async init() {
    try {
      await fs.access(this.path);
      const data = await fs.readFile(this.path, "utf-8");
      if (!data.trim()) {
        await fs.writeFile(this.path, JSON.stringify([]));
      }
    } catch (error) {
      await fs.writeFile(this.path, JSON.stringify([]));
    }
  }

  async readFile() {
    try {
      const data = await fs.readFile(this.path, "utf-8");
      return JSON.parse(data || "[]");
    } catch (error) {
      throw new Error(`Error reading file at ${this.path}: ${error.message}`);
    }
  }


  async writeFile(data) {
    try {
      const jsonData = JSON.stringify(data, null, 2);
      await fs.writeFile(this.path, jsonData);
    } catch (error) {
      throw new Error(`Error writing file at ${this.path}: ${error.message}`);
    }
  }

  async createMock() {
    try {
      const newProduct = {
        _id: faker.database.mongodbObjectId(),
        title: faker.commerce.productName(),
        price: faker.commerce.price({ min: 10, max: 500, dec: 2 }),
        stock: faker.number.int({ min: 0, max: 1000 }),
        thumbnails: Array.from({ length: 3 }, () => faker.image.url()),
        category: faker.helpers.arrayElement(["ninguna", "celulares", "computadoras", "accesorios"]),
      };
      const data = await this.readFile();
      data.push(newProduct);
      await this.writeFile(data);
      return newProduct;
    } catch (error) {
      throw error;
    }
  }

  async create(data) {
    try {
      if (!data.title || typeof data.title !== "string") {
        throw new Error("Invalid or missing 'title'");
      }
      if (!data.price || typeof data.price !== "number") {
        throw new Error("Invalid or missing 'price'");
      }
      const newProduct = {
        _id: faker.database.mongodbObjectId(), ...data, thumbnails: data.thumbnails && Array.isArray(data.thumbnails) && data.thumbnails.length > 0
          ? data.thumbnails
          : ["https://p0.pikist.com/photos/833/895/kitty-cat-kitten-pet-animal-cute-feline-domestic-young.jpg"], 
      }
      const dataOfFile = await this.readFile();
      dataOfFile.push(newProduct);
      await this.writeFile(dataOfFile);
      return newProduct;
    } catch (error) {
      throw error;
    }
  }

  async readAll(category) {
    try {
      let all = await this.readFile();
      if (category) {
        all = all.filter((each) => each.category === category);
      }
      return all;
    } catch (error) {
      throw error;
    }
  }

  async readOne(id) {
    try {
      const all = await this.readFile();
      const one = all.find((each) => each._id === id);
      if (!one) throw new Error(`Product with ID ${id} not found`);
      return one;
    } catch (error) {
      throw error;
    }
  }

  async updateOne(id, newData) {
    try {
      const all = await this.readFile();
      const index = all.findIndex((product) => product._id === id);
      if (index === -1) throw new Error(`Product with ID ${id} not found`);
      all[index] = { ...all[index], ...newData };
      await this.writeFile(all);
      return all[index];
    } catch (error) {
      throw error;
    }
  }

  async destroyOne(id) {
    try {
      const all = await this.readFile();
      const index = all.findIndex((product) => product._id === id);
      if (index === -1) throw new Error(`Product with ID ${id} not found`);
      const [removedProduct] = all.splice(index, 1);
      await this.writeFile(all);
      return removedProduct;
    } catch (error) {
      throw error;
    }
  }
}
