## About

This project is a small example of GraphQl server connected to MongoDB. Use as a starting point for GraphQL server project.

- **There is no MongoDB included!** You need to have MongoDB up and runing somewhere. You will need a connection string for that DB.
- Using Apollo, express and mongoose.
- at the end of this readme, there is a quick note how to set up npm packages for development. Not needed, but it is there.

- **Important!** You need to create config.sys file for your setting, before anything works! That file is not included and it is initially ignored in .gitignore

## config.js 

When pulled, you need to **create file called 'config.js' to the root**. It stores all the configuration data for whole project.
Config.js is in .gitignore because it will contain your personal settings. It will not push to your repository unless you edit .gitignore.

After creating config.js, copy and paste the code below into it. 
**You must replace connection string at mongoConnectingString**.  

config.js
```
var config = {};

config.expressListeningPort = 4000;
config.mongoConnectionString = 'mongodb://<YOURUSERNAME>:<YOURPASSWORD>@192.168.1.5:27017/<DATABASE>?authSource=admin&authMechanism=SCRAM-SHA-256&readPreference=primary&appname=MongoDB%20Compass&ssl=false';

//There option are for mongoose connection
//more info at https://mongoosejs.com/docs/connections.html
config.mongooseConnectionOptions= {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

module.exports = config;
```

## Setting up from srcatch.

#####SETUP APOLLO and EXPRESS
------------------------

$ `npm install -g npm`
install latest version of node packet manager.

$ `npm init` 
Create new node project and package.json for it.

$ `npm install @babel/core @babel/node @babel/cli --save-dev`
install babel stuff

$ `npm install @babel/preset-env --save-dev`
install babel presets. 

Create file called babel.config.json
This file is configurations for babel and is needed for babel to work.
put this json in that file:

```
{
  "presets": ["@babel/preset-env"]
}
```

Add this start script into package.json

```
  "scripts": {
    "start": "nodemon --exec babel-node -- ./src/graphqlserver.js"
  }
 ```

$ `npm install nodemon --save-dev`
install nodemon as local dev dependency

create file and folder /src/graphqlserver.js
into file : `console.log("Hello !")`
this is your starting point file.

$ `npm start`
Everything should be ok! 

$ `npm install apollo-server-express` 
Installs express and apollo. Apollo is the graphql part of it.
https://www.npmjs.com/package/apollo-server-express

open this link : https://www.npmjs.com/package/apollo-server-express
Copy the 'express' code and put it in graphqlserver.

$ `npm start`
if everything is ok, server should be running.

...video about this : https://www.youtube.com/watch?v=YFkJGEefgU8

#####SETUP MONGOOSE and MONGOBD connection
----------------------

$ `npm install mongoose`
to install mongoose!

