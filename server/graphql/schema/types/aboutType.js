const graphql = require("graphql");

const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const aboutType = new GraphQLObjectType({
  name: "about",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    des: { type: GraphQLString },
    create_at: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
});
module.exports = aboutType;
