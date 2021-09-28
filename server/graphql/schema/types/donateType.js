const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = graphql;

const donateType = new GraphQLObjectType({
  name: 'donate',
  fields: () => ({
    id: { type: GraphQLID },
    tree: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    user_message: { type: GraphQLString },
    anonymous: { type: GraphQLBoolean },
    team: { type: GraphQLString },
    public: { type: GraphQLBoolean },
    selectType: { type: GraphQLString },
    create_at: { type: GraphQLString },
    message: { type: GraphQLString },
    success: { type: GraphQLInt },
    count: { type: GraphQLString },
    isContact: { type: GraphQLBoolean },
  }),
});

module.exports = donateType;
