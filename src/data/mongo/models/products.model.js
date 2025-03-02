import { Schema, Types, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "products";
// products.model.js
const schema = new Schema(
  {
    title: { type: String, required: true, index: true },
    description: { type: String },
    category: { type: String, default: "Laptops", enum: [/* ... */], index: true },
    thumbnails: { 
      type: [String], 
      default: ["https://www.shutterstock.com/image-vector/missing-picture-page-website-design-600nw-1552421075.jpg"] 
    },
    price: { type: Number, default: 10 },
    stock: { type: Number, default: 10 },
    onsale: { type: Boolean, default: false },
    owner_id: { type: Types.ObjectId, ref: "users", index: true },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

schema.pre(/^find/, function () {
  this.populate("owner_id", "email avatar");
});

const Product = model(collection, schema);
export default Product;