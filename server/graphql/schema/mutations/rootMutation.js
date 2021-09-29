const graphql = require('graphql');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JwtSecret } = process.env;

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
} = graphql;

//============Model Sections=========
const Donate = require('../../../model/donate');
const User = require('../../../model/user');
//============Type Sections==========
const DonateType = require('../types/donateType');
const UserType = require('../types/userType');

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: () => ({
    //==========Donations===========
    donation: {
      type: DonateType,
      args: {
        tree: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLString },
        user_message: { type: GraphQLString },
        selectType: { type: GraphQLNonNull(GraphQLString) },
        team: { type: GraphQLString },
        anonymous: { type: GraphQLBoolean },
        public: { type: GraphQLBoolean },
      },
      resolve: async (parent, args) => {
        try {
          const donate = new Donate({ ...args });
          await donate.save();
          return {
            success: true,
            message: 'Donation added with successfully!',
          };
        } catch (error) {
          console.log(error);
          return {
            success: false,
            message: 'Donation falied!',
          };
        }
      },
    },
  }),
});
module.exports = RootMutation;
