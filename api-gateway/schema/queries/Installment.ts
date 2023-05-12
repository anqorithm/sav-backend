import { GraphQLList } from "graphql";
import { InstallmentType } from "../typedefs/Installment";
import { getAllInstallments } from "../resolvers/getAllInstallments";

export const GET_ALL_INSTALLMENTS = {
  type: new GraphQLList(InstallmentType),
  resolve: async () => {
    const installments = await getAllInstallments();
    return installments;
  },
};
