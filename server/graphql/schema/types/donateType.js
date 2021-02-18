const graphql = require("graphql")

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql

const donateType = new GraphQLObjectType({
  name: "donate",
  fields: () => ({
    id: { type: GraphQLID },
    tree: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    user_message: { type: GraphQLString },
    anonymous: { type: GraphQLString },
    create_at: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
})

module.exports = donateType
