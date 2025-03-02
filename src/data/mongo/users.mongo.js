import Manager from "./manager.mongo.js";
import User from "./models/users.model.js";

class UsersManager extends Manager {
  constructor() {
    super(User);
  }
  login = async (email, password) => {
    try {
      const one = await this.model.findOne({ email, password }).lean();
      return one;
    } catch (error) {
      throw error;
    }
  };
}

const usersManager = new UsersManager();
export default usersManager;