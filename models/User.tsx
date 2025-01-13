import mongoose, { Model, Schema } from "mongoose";
import { userSchemaType } from "../types/userSchemaType";
import ProductModel from "./Product";

const schema: Schema<userSchemaType> = new mongoose.Schema<userSchemaType>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },
  wishlist: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    default: [],
  },
  cart: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    default: [],
  },
});

const userModel: Model<userSchemaType> =
  mongoose.models.UserModel ||
  mongoose.model<userSchemaType>("UserModel", schema);

export default userModel;
