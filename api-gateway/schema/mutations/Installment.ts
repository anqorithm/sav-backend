import { GraphQLString, GraphQLFloat, GraphQLBoolean } from "graphql";
import { InstallmentType } from "../typedefs/Installment";

export const CREATE_INSTALLMENT = {
  type: InstallmentType,
  args: {
    userName: { type: GraphQLString },
    userEmail: { type: GraphQLString },
    userPhone: { type: GraphQLString },
    productId: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    dueDate: { type: GraphQLString },
    isPaid: { type: GraphQLBoolean },
  },
  resolve: async (parent: any, args: any) => {
    const { userName, userEmail, userPhone, productId, amount, dueDate, isPaid } = args;
  }
};
