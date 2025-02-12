import { faker } from "@faker-js/faker";
import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("./src/data/fs/files/users.json");

export default class UsersManager {
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
      throw new Error(`Error reading file: ${error.message}`);
    }
  }
  

  async writeFile(data) {
    try {
      const jsonData = JSON.stringify(data, null, 2);
      await fs.writeFile(this.path, jsonData);
    } catch (error) {
      throw new Error(`Error writing file: ${error.message}`);
    }
  }

  async createMock() {
    try {
      const fullName = faker.person.fullName().toLowerCase().split(" ");
      const user = {
        _id: faker.database.mongodbObjectId(),
        name: fullName[0],
        lastName: fullName[1],
        email: `${fullName.join(".")}@coder.com`,
        password: "hola1234",
        age: faker.number.int({ min: 18, max: 70 }),
        avatar: faker.image.avatar(),
        role: faker.helpers.arrayElement(["user", "admin", "premium"]),
      };
      const dataOfFile = await this.readFile();
      dataOfFile.push(user);
      await this.writeFile(dataOfFile);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async create(data) {
    try {
      const user = {
        _id: faker.database.mongodbObjectId(),
        ...data,
      };
      const dataOfFile = await this.readFile();
      dataOfFile.push(user);
      await this.writeFile(dataOfFile);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async readAll(role) {
    try {
      let allUsers = await this.readFile();
      if (role) {
        allUsers = allUsers.filter((user) => user.role === role);
      }
      return allUsers;
    } catch (error) {
      throw error;
    }
  }

  async readOne(id) {
    try {
      const allUsers = await this.readFile();
      const user = allUsers.find((each) => each._id === id);
      if (!user) {
        const error = new Error(`User with ID ${id} not found`);
        error.statusCode = 404;
        throw error;
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateOne(id, newData) {
    try {
      const allUsers = await this.readFile();
      const index = allUsers.findIndex((user) => user._id === id);
      if (index === -1) {
        const error = new Error(`User with ID ${id} not found`);
        error.statusCode = 404;
        throw error;
      }
      allUsers[index] = { ...allUsers[index], ...newData };
      await this.writeFile(allUsers);
      return allUsers[index];
    } catch (error) {
      throw error;
    }
  }

  async destroyOne(id) {
    try {
      const allUsers = await this.readFile();
      const index = allUsers.findIndex((user) => user._id === id);
      if (index === -1) {
        const error = new Error(`User with ID ${id} not found`);
        error.statusCode = 404;
        throw error;
      }
      const [removedUser] = allUsers.splice(index, 1);
      await this.writeFile(allUsers);
      return removedUser;
    } catch (error) {
      throw error;
    }
  }
}
