const graphql = require("graphql");

const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const initationType = new GraphQLObjectType({
  name: "initaion",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    des: { type: GraphQLString },
    image: { type: GraphQLString },
    create_at: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
});
module.exports = initationType;
