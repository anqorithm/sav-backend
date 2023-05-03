import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
} from "graphql";

export const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    imageUrl: { type: GraphQLString },
    numberOfInstallments: { type: GraphQLInt },
  },
});
