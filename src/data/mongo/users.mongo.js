import Manager from "./manager.mongo.js";
import User from "./models/users.model.js";

const UsersManagers = new Manager(User);
export default UsersManagers;