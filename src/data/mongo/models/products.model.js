import { Schema, model } from "mongoose";

const collection = "products";
const schema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, default: "none" },
    thumbnails: { type: [String], default: ["https://www.shutterstock.com/image-vector/missing-picture-page-website-design-600nw-1552421075.jpg"] },
    price: { type: Number, default: 10 },
    stock: { type: Number, default: 10 },
  },
  { timestamps: true }
);

const Product = model(collection, schema);
export default Product;