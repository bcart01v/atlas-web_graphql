// Schema.js
// This file is the schema for the GraphQL API.
// BJC 2024-10-28
const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      task: {
        type: TaskType,
        args: { id: { type: GraphQLString } },
        resolve(parent, args) {}
      }
    }
  });
  
  module.exports = new GraphQLSchema({
    query: RootQuery
  });