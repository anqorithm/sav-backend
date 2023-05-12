import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_PRODUCTS } from "./queries/Product";
import { CREATE_PRODUCT } from "./mutations/Product";
import { GET_ALL_INSTALLMENTS } from "./queries/Installment";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllProducts: GET_ALL_PRODUCTS,
    getAllInstallments: GET_ALL_INSTALLMENTS,
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