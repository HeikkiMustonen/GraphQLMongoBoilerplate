import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

//note! chech that config.js is actually filled and exists.
var Myconfig = require('../config.js');

//connect to mongoose
if(Myconfig.mongoConnectionString !== ''){
  mongoose.connect(Myconfig.mongoConnectionString)
}
else{
  console.warn('there is no mongo connection string given in config.js')
}

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: Myconfig.expressListeningPort }, () =>
  
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);