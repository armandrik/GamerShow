import mongoose from "mongoose";

export type ProductSchemaType = {
  _id?: mongoose.Types.ObjectId | string;
  image: string;
  name: string;
  price: number;
  released: Date;
  averagePlayTime: number;
  score: number;
  genre: string;
  store: string[];
  platform: string[];
  metaScore: number;
  screenshots: string[];
  about: string;
  tags: string[];
  requirements: {
    minimum: string;
    recommended: string;
  };
  comments: mongoose.Types.ObjectId[];
};
