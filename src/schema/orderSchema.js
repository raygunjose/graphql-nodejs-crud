const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Order {
    _id: ID!
    customerName: String!
    mainDish: String!
    sideDish: String!
    mainDishPrice: Float!
    sideDishPrice: Float!
  }

  input OrderInput {
    customerName: String!
    mainDish: String!
    sideDish: String!
    mainDishPrice: Float!
    sideDishPrice: Float!
  }

  type Query {
    getOrders: [Order]
    getOrder(id: ID!): Order
  }

  type Mutation {
    createOrder(input: OrderInput!): Order
    updateOrder(id: ID!, input: OrderInput!): Order
    deleteOrder(id: ID!): String
  }
`;

module.exports = typeDefs;
