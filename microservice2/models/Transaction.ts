import mongoose, { Model, Schema, Document } from "mongoose";

export interface ITransaction extends Document {
  status: string;
  amount: number;
  paymentMethod: string;
  paymentId: string;
  deliveryDate: Date;
  buyer: {
    name: string;
    email: string;
    phone: string;
  };
  seller: {
    name: string;
    email: string;
    phone: string;
  };
}

const TransactionSchema: Schema = new Schema(
  {
    status: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    paymentId: { type: String, required: true },
    deliveryDate: { type: Date, required: true },
    buyer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
    },
    seller: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
    },
  },
  {
    timestamps: true,
    toObject: {
      transform: function (doc, ret, game) {
        delete ret.__v;
      },
    },
  }
);

export const Transaction: Model<ITransaction> = mongoose.model<ITransaction>(
  "Transaction",
  TransactionSchema
);
