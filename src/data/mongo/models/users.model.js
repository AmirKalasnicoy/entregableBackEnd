import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "users";
const schema = new Schema(
  {
    name: { type: String },
    date: { type: Date },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    avatar: { type: String, default: "https://cdn-icons-png.flaticon.com/512/266/266033.png" },
    role: { type: String, default: "USER", enum: ["USER", "ADMIN", "PREM"], index: true },
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);

const User = model(collection, schema);
export default User;