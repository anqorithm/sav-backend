import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLBoolean } from "graphql";

export const InstallmentType = new GraphQLObjectType({
  name: "Installment",
  fields: () => ({
    user: {
      type: new GraphQLObjectType({
        name: "InstallmentUser",
        fields: {
          name: { type: GraphQLString },
          email: { type: GraphQLString },
          phone: { type: GraphQLString },
        },
      }),
    },
    productId: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    dueDate: { type: GraphQLString },
    isPaid: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
  }),
});
