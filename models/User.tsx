import mongoose, { Model, Schema } from "mongoose";

type userSchemaType = {
  username: string;
  email: string;
  password: string;
  role: "ADMIN" | "USER";
};

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
});

const userModel: Model<userSchemaType> =
  mongoose.models.UserModel ||
  mongoose.model<userSchemaType>("UserModel", schema);

export default userModel;
