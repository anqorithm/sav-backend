import mongoose, { model, Model, Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export const Product: Model<IProduct> = mongoose.model<IProduct>(
  "Product",
  ProductSchema
);
