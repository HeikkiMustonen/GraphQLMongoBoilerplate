import {ApolloServer,gql} from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import typeDefs from "../models_mongoose/typeDefs.js";
import resolvers from "../models_mongoose/resolvers.js";

require('dotenv').config()

const StartServer = async () =>{
    //connect to mongoose
    let mongoConnectionsString = process.env.MONGOCONNECTIONSTRING
    let mongooseConnectionOptions = process.env.MONGOOSECONNECTIONOPTIONS
    if(true){
      //lets wait for mongoDB to connect and respond...
    console.log(process.env.MONGOCONNECTIONSTRING);
     await mongoose.connect(process.env.MONGOCONNECTIONSTRING)
    }
    else{
      console.warn('there is no mongo connection string given in config.js.')
    }

    // Provide resolver functions for your schema fields

    const server = new ApolloServer({ typeDefs, resolvers });

    const app = express();
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () =>
      
      console.log(`🚀 Server ready at http://localhost:${server.graphqlPath}`)
    );
}

StartServer();
