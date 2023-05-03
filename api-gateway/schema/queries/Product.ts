import { GraphQLList } from "graphql";
import { ProductType } from "../typedefs/Product";
import { getAllProducts } from "../resolvers/getAllProducts";
export const GET_ALL_PRODUCTS = {
  type: new GraphQLList(ProductType),
  resolve: async () => {
    const products = await getAllProducts();
    return products.data.products;
  },
};
