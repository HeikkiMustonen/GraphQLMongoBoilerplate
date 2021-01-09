import {ApolloServer,gql} from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import typeDefs from "../models_mongoose/typeDefs.js";
import resolvers from "../models_mongoose/resolvers.js";

//note! chech that config.js is actually filled and exists.
//you need this file...
import Myconfig from "../config.js";

const StartServer = async () =>{
    //connect to mongoose
    if(Myconfig.mongoConnectionString !== ''){
      //lets wait for mongoDB to connect and respond...
     await mongoose.connect(Myconfig.mongoConnectionString, Myconfig.mongooseConnectionOptions)
    }
    else{
      console.warn('there is no mongo connection string given in config.js')
    }

    // Provide resolver functions for your schema fields

    const server = new ApolloServer({ typeDefs, resolvers });

    const app = express();
    server.applyMiddleware({ app });

    app.listen({ port: Myconfig.expressListeningPort }, () =>
      
      console.log(`🚀 Server ready at http://localhost:${Myconfig.expressListeningPort}${server.graphqlPath}`)
    );
}

StartServer();