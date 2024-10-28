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
// I assume this will be needed at some point.
module.exports = TaskType;