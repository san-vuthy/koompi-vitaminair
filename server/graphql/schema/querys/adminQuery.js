const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

//============Model Sections=========
const Donate = require("../../../model/donate");
//============Type Sections==========
const DonateType = require("../types/donateType");

const AdminQuery = new GraphQLObjectType({
  name: "AdminQueryType",
  fields: () => ({
    //============get Donation===========
    get_donations: {
      type: new GraphQLList(DonateType),
      resolve(parent, args) {
        return Donate.find({}).sort({ create_at: -1 });
      },
    },
    get_count_donation: {
      type: new GraphQLList(DonateType),
      resolve: async (parent, args) => {
        try {
          const donate = await Donate.find().countDocuments();
          console.log(donate);
          return donate.valueOf(donate);
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    get_most_trees: {
      type: new GraphQLList(DonateType),
      resolve: async (parent, args) => {
        try {
          return Donate.find().sort({ tree: -1 });
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
  }),
});
module.exports = AdminQuery;
