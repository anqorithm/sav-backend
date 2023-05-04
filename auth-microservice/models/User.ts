import mongoose, { Document, Model, Schema } from "mongoose";

export type UserType = "buyer" | "seller";

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  type: UserType;
  password: string;
  isVerified: boolean;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    type: { type: String, required: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, required: true },
  },
  {
    toObject: {
      transform: function (doc, ret, user) {
        delete ret.__v;
      },
    },
  }
);

export const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
