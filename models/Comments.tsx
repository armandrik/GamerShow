import mongoose, { Model, Schema } from "mongoose";

// Define the TypeScript interface for the comment document
type CommentsSchemaType = {
  name: string; // User's name
  body: string; // Comment text
  productID: mongoose.Types.ObjectId; // Reference to a product
  createdAt?: Date;
  updatedAt?: Date;
};

// Define the Mongoose schema
const schema: Schema<CommentsSchemaType> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
  },
  { timestamps: true }
);

// Define and export the model
const commentModel: Model<CommentsSchemaType> =
  mongoose.models.Comment || mongoose.model("Comment", schema);

export default commentModel;
