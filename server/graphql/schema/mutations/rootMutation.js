const graphql = require("graphql")

const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLBoolean } = graphql

//============Model Sections=========
const Donate = require("../../../model/donate")
//============Type Sections==========
const DonateType = require("../types/donateType")

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: () => ({
    //==========Donations===========
    donation: {
      type: DonateType,
      args: {
        tree: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
        user_message: { type: GraphQLNonNull(GraphQLString) },
        anonymous: { type: GraphQLNonNull(GraphQLBoolean) },
      },
      resolve: async (parent, args) => {
        try {
          const donate = new Donate({ ...args })
          await donate.save()
          return { message: "Donation successfull!" }
        } catch (error) {
          console.log(error)
          throw error
        }
      },
    },
  }),
})
module.exports = RootMutation
