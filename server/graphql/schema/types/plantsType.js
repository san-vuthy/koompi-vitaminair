const graphql = require("graphql");

const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const plantsType = new GraphQLObjectType({
  name: "plants",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    subname: { type: GraphQLString },
    des: { type: GraphQLString },
    image: { type: GraphQLString },
    create_at: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
});
module.exports = plantsType;
