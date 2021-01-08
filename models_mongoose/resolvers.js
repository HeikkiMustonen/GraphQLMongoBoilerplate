const { model } = require("mongoose");

const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };

  module.exports = resolvers;