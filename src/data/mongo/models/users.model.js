import { Schema, model } from "mongoose";

const collection = "users";
const schema = new Schema(
  {
    name: { type: String },
    date: { type: Date },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, default: "https://cdn-icons-png.flaticon.com/512/266/266033.png" },
    role: { type: String, default: "user", enum: ["user", "admin", "prem"] },
  },
  { timestamps: true }
);

const User = model(collection, schema);
export default User;