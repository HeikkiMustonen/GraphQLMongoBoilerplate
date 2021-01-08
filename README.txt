SETUP APOLLO and EXPRESS
------------------------

$ npm install -g npm
install latest version of node packet manager.

$ npm init 
Create new node project and package.json for it.

$ npm install @babel/core @babel/node @babel/cli --save-dev
install babel stuff

$npm install @babel/preset-env --save-dev
install babel presets. 

Create file called babel.config.json
This file is configurations for babel and is needed for babel to work.
put this json in that file:
{
  "presets": ["@babel/preset-env"]
}

Add this start script into package.json
  "scripts": {
    "start": "nodemon --exec babel-node -- ./src/graphqlserver.js"
  }

$ npm install nodemon --save-dev
install nodemon as local dev dependency

create file and folder /src/graphqlserver.js
into file : console.log("Hello !")
this is your starting point file.

$ npm start
Everything should be ok. 

$ npm install apollo-server-express 
Installs express and apollo. Apollo is the graphql part of it.
https://www.npmjs.com/package/apollo-server-express

open this link : https://www.npmjs.com/package/apollo-server-express
Copy the 'express' code and put it in graphqlserver.

$npm start
if everything is ok, server should be running.

...video about this : https://www.youtube.com/watch?v=YFkJGEefgU8

SETUP MONGOOSE and MONGOBD connection
----------------------



