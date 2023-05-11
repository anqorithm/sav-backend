const { ApolloServer, gql } = require('apollo-server-express');
const Installment = require('../models/Installments');
const axios = require('axios');

// Define your GraphQL schema
const typeDefs = gql`
  type Installment {
    _id: ID!
    productId: String!
    amount: Float!
    dueDate: String!
    productName: String!
    user: User!
    isPaid: Boolean!
    createdAt: String!
  }

  type User {
    phone: String!
  }

  type Query {
    getAllInstallments: [Installment!]!
    getInstallmentById(id: ID!): Installment
    getUserInstallments(phone: String!): [Installment!]!
  }

  type Mutation {
    createInstallment(user: String!, productId: String!, numberOfMonths: Int!, price: Float!): String!
    updateInstallment(id: ID!, installment: UpdateInstallmentInput!): Installment!
    deleteInstallment(id: ID!): String!
    markInstallment(id: ID!, paid: Boolean!): Installment!
  }

  input UpdateInstallmentInput {
    user: String
    productId: String
    amount: Float
    dueDate: String
    isPaid: Boolean
  }
`;

// Define your GraphQL resolvers
const resolvers = {
    Query: {
        getAllInstallments: async () => {
            try {
                const installments = await Installment.find();
                const newInstallments = [];
                for (let i = 0; i < installments.length; i++) {
                    const installment = installments[i];
                    const product = await axios.get(`${process.env.MICRO1}/products/${installment.productId}`);
                    const newInstallment = {
                        _id: installment._id,
                        productId: installment.productId,
                        amount: installment.amount,
                        dueDate: installment.dueDate,
                        productName: product.data.data.name,
                        user: installment.user,
                        isPaid: installment.isPaid,
                        createdAt: installment.createdAt,
                    };
                    newInstallments.push(newInstallment);
                }
                return newInstallments;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        getInstallmentById: async (_, { id }) => {
            try {
                const installment = await Installment.findById(id);
                if (!installment) {
                    throw new Error('Installment not found');
                }
                return installment;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        getUserInstallments: async (_, { phone }) => {
            try {
                const userInstallments = await Installment.find({ 'user.phone': phone });
                return userInstallments;
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
    Mutation: {
        createInstallment: async (_, { user, productId, numberOfMonths, price }) => {
            let months = numberOfMonths;
            let installmentAmount = price / months;

            try {
                for (let i = 0; i < months; i++) {
                    let installment = {
                        user,
                        amount: installmentAmount,
                        dueDate: new Date().setMonth(new Date().getMonth() + i),
                        isPaid: false,
                        productId,
                    };
                    const newInstallment = new Installment(installment);
                    await newInstallment.save();
                }

                return 'Installments created';
            } catch (error) {
                throw new Error(error.message);
            }
        },
        updateInstallment: async (_, { id, installment }) => {
            try {
                const updatedInstallment = await Installment.findByIdAndUpdate(
                    id,
                    installment,
                    { new: true }
                );
                if (!updatedInstallment) {
                    throw new Error('Installment not found');
                }
                return updatedInstallment;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        deleteInstallment: async (_, { id }) => {
            try {
                const deletedInstallment = await Installment.findByIdAndDelete(id);
                if (!deletedInstallment) {
                    throw new Error('Installment not found');
                }
                return 'Installment deleted';
            } catch (error) {
                throw new Error(error.message);
            }
        },
        markInstallment: async (_, { id, paid }) => {
            try {
                const updatedInstallment = await Installment.findByIdAndUpdate(
                    id,
                    { isPaid: paid },
                    { new: true }
                );
                if (!updatedInstallment) {
                    throw new Error('Installment not found');
                }
                return updatedInstallment;
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
};

// Create an Apollo Server instance with your schema and resolvers
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

module.exports = server;
