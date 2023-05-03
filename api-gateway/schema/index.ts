import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_PRODUCTS } from "./queries/Product";
import { CREATE_PRODUCT } from "./mutations/Product";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllProducts: GET_ALL_PRODUCTS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createProduct: CREATE_PRODUCT,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
