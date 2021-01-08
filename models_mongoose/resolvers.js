const { model } = require("mongoose");
const { Tank } = require("./Tank");

const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      //try in playground {getAllTanks{id, name}}
      getAllTanks: () => Tank.find()
    },
    Mutation:{
        //we don't care about first argument, take just name.
        //try in graphql playground : mutation{createTank(name:"T-34"){id, name}}
        createTank: (_,{name}) => {
            const tank = new Tank({name});
            return tank.save();
        }
    }
  };

  module.exports = resolvers;