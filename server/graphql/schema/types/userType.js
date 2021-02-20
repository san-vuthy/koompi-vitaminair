const graphql = require("graphql")

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql

const userType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    fullname: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    create_at: { type: GraphQLString },
    token: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
})

module.exports = userType
