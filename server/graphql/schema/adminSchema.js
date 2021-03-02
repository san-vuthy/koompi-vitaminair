const graphql = require("graphql");
const { GraphQLSchema } = graphql;
const RootQuery = require("./querys/adminQuery");
const RootMutation = require("./mutations/adminMutation");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
