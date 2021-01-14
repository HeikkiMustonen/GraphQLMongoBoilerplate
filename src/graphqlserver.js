import {ApolloServer,gql} from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import typeDefs from "../models_mongoose/typeDefs.js";
import resolvers from "../models_mongoose/resolvers.js";

require('dotenv').config()

const StartServer = async () =>{
    //connect to mongoose
    let mongoConnectionsString = process.env.MONGOCONNECTIONSTRING
    let port  = process.env.PORT
    if(mongoConnectionsString){
      //lets wait for mongoDB to connect and respond...
 
     await (await mongoose.connect(mongoConnectionsString, { useNewUrlParser: true,  useUnifiedTopology: true}))
   
    }
    else{
      console.warn('there is no mongo connection string given in .ENV')
    }

    // Provide resolver functions for your schema fields
    const server = new ApolloServer({ typeDefs, resolvers });

    const app = express();
    server.applyMiddleware({ app });

    app.listen({ port: port }, () =>{
      
      console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
       
    });
}

StartServer();
