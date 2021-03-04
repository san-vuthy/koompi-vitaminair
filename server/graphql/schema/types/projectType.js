const graphql = require("graphql");

const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const projectType = new GraphQLObjectType({
  name: "project",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    des: { type: GraphQLString },
    create_at: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
});
module.exports = projectType;
