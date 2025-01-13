import mongoose from "mongoose";

export type userSchemaType = {
  username: string;
  email: string;
  password: string;
  role: "ADMIN" | "USER";
  wishlist : mongoose.Types.ObjectId[]
  cart : mongoose.Types.ObjectId[]
};
