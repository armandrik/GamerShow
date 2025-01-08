import mongoose, { Model, Schema } from "mongoose";
import { ProductSchemaType } from "../types/ProductSchemaType";
import commentModel from "./Comments";

const schema: Schema<ProductSchemaType> = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    index: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  released: {
    type: Date,
    required: true,
  },
  averagePlayTime: {
    type: Number,
    required: true,
    min: 0,
  },
  score: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  genre: {
    type: String,
    required: true,
  },
  store: {
    type: [String],
    required: true,
    validate: {
      validator: (arr: string[]) => arr.length > 0,
      message: "Store array must not be empty.",
    },
  },
  platform: {
    type: [String],
    required: true,
    validate: {
      validator: (arr: string[]) => arr.length > 0,
      message: "Platform array must not be empty.",
    },
  },
  metaScore: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  screenshots: {
    type: [String],
    required: true,
    validate: {
      validator: (arr: string[]) =>
        arr.length > 0 &&
        arr.every(
          (screenshot) =>
            typeof screenshot === "string" && screenshot.trim() !== ""
        ),
      message: "Screenshots array must contain valid non-empty strings.",
    },
  },
  about: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
    validate: {
      validator: (arr: string[]) => arr.length > 0,
      message: "Tags array must not be empty.",
    },
  },
  requirements: {
    type: {
      minimum: { type: String, required: true },
      recommended: { type: String, required: true },
    },
    required: true,
  },
  comments: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    default: [],
  },
});

const ProductModel: Model<ProductSchemaType> = mongoose.models.Product || mongoose.model("Product", schema);

export default ProductModel;
