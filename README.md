## About
This project is a small example of GraphQl server connected to MongoDB. Use as a starting point for GraphQL server project.

- **There is no MongoDB included!** You need to have a MongoDB up and running somewhere. You will need a connection string to that DB.
- Using packages Apollo, express and mongoose.
- at the end of this readme, there is a quick note how to set up npm packages for development. Not needed, but it is there.
- Dockerfile included

- **Important!** You need to create .ENV file for your setting, before anything works! That file is not included and it is initially ignored in .gitignore

## .ENV 
When cloned, you need to **create a file called '.ENV' to the root**. It stores all the configuration data for whole project.
.ENV is in .gitignore because it will contain your personal settings. It will not push to your repository unless you edit .gitignore.

After creating .ENV, copy and paste the code below into it. 
**You must replace connection string at mongoConnectingString**.  

config.js
```
MONGOOSECONNECTIONSRING='mongodb://<USERNAME>:<PASSWORD>@<IP>:<PORT>/<DB_NAME>?authSource=admin&authMechanism=SCRAM-SHA-256&readPreference=primary&appname=MongoDB%20Compass&ssl=false'
PORT=4000 
```
## Dockerfile
When building an docker image and running it as a container, here is two ways you can set the environmental variables for that container. **If you include .ENV file into image, it won't be used.**
- When you build a docker image of this project, you should create your .ENV file at your server. 
You can use that .ENV file to set the environmental variables to the container.  Run the container with something like this:
$ `docker run --rm --env-file .ENV -p 4000:4000/tcp graphqlserver`

- in Dockerfile, there are places for setting up variables there. Just uncomment, fill those in and build the image. 

Image created from this Dockerfile has:

- debian with node
- vim 
- net-tools
- psmisc

## Setting up from srcatch.
if you want to build your own boilerplate like this from ground up..
Tutorial video : https://www.youtube.com/watch?v=YFkJGEefgU8

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

$ `npm install mongoose`
to install mongoose!

