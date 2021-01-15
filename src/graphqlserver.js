import {ApolloServer,gql} from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import typeDefs from "../models_mongoose/typeDefs.js";
import resolvers from "../models_mongoose/resolvers.js";
import fs from "file-system";
import colors from "colors";

require('dotenv').config()

const StartServer = async () =>{
    //Checks for .ENV file
    fs.access('./.ENV',0, (err) => {
      if(err){
        console.log(".ENV not found! You need to create one...".red)
      }else{
        console.log(".ENV file found!".green)
      }
    })

    let mongoConnectionsString = process.env.MONGOCONNECTIONSTRING
    let port  = process.env.PORT
    
    if(!mongoConnectionsString){
      console.log("MONGOCONNECTIONSTRING is missing from .ENV file".red)
    }

    if(!port){
      console.log("PORT is missing from .ENV file".red)
    }

    //connect mongoose to DB
    try{
      await mongoose.connect(mongoConnectionsString, { useNewUrlParser: true,  useUnifiedTopology: true})
    }
    catch(error){
      //error connecting to DB
      console.log("MongoDB troubles...".red)
      console.log(error)

      process.exit() //if there is no connection, exit...
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
