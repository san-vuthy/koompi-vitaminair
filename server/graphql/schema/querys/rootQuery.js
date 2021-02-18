const graphql = require("graphql")
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
        return Donate.find({})
      },
    },
  },
})
module.exports = RootQuery
