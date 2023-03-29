import mongoose, { Model, Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  numberOfInstallments: number;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    numberOfInstallments: { type: Number, required: true },
  },
  {
    toObject: {
      transform: function (doc, ret, game) {
        delete ret.__v;
      },
    },
  }
);

export const Product: Model<IProduct> = mongoose.model<IProduct>(
  "Product",
  ProductSchema
);
