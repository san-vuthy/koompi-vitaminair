const { query } = require("express")
const graphql = require("graphql")
const { getMaxListeners } = require("../../../model/donate")
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql

//============Model Sections=========
const Donate = require("../../../model/donate")
//============Type Sections==========
const DonateType = require("../types/donateType")

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //============get Donation===========
    get_donation: {
      type: new GraphQLList(DonateType),
      resolve(parent, args) {
        return Donate.find({}).sort({ create_at: -1 })
      },
    },
    get_most_trees: {
      type: new GraphQLList(DonateType),
      resolve: async (parent, args) => {
        try {
          const result = await Donate.find().sort({ tree: -1 })
          return result
        } catch (error) {
          console.log(error)
          throw error
        }
      },
    },
  },
})
module.exports = RootQuery
