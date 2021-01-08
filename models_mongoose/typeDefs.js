import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
    hello: String
    getAllTanks:[Tank!]!
    }

    type Tank{
        id:ID!
        name : String!
    }

    type Mutation{
        createTank(name: String!):Tank!
    }
`;

module.exports = typeDefs;