const Order = require('../models/Order');

const resolvers = {
  Query: {
    getOrders: async () => {
      return await Order.find();
    },
    getOrder: async (_, { id }) => {
      return await Order.findById(id);
    },
  },
  Mutation: {
    createOrder: async (_, { input }) => {
      const newOrder = new Order(input);
      return await newOrder.save();
    },
    updateOrder: async (_, { id, input }) => {
      return await Order.findByIdAndUpdate(id, input, { new: true });
    },
    deleteOrder: async (_, { id }) => {
      await Order.findByIdAndDelete(id);
      return 'Order deleted successfully';
    },
  },
};

module.exports = resolvers;
