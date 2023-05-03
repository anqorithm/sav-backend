import { ProductType } from "../typedefs/Product";
import { GraphQLString, GraphQLFloat, GraphQLInt } from "graphql";

export const CREATE_PRODUCT = {
  type: ProductType,
  args: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    imageUrl: { type: GraphQLString },
    numberOfInstallments: { type: GraphQLInt },
  },
  resolve: async (parent: any, args: any) => {
    const { name, description, price, imageUrl, numberOfInstallments } = args;
  },
};
