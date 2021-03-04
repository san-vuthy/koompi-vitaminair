const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

//============Model Sections=========
const Donate = require("../../../model/donate");
const Initation = require("../../../model/initation");
const Project = require("../../../model/project");
const About = require("../../../model/about");
const Member = require("../../../model/member");
//============Type Sections==========
const DonateType = require("../types/donateType");
const Initationtype = require("../types/initationType");
const ProjectType = require("../types/projectType");
const AboutType = require("../types/aboutType");
const MemberType = require("../types/memeberType");

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
    get_initations: {
      type: new GraphQLList(Initationtype),
      resolve: async (parent, args) => {
        try {
          return Initation.find().sort({ create_at: -1 });
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //===========get project=======
    get_projects: {
      type: new GraphQLList(ProjectType),
      resolve: async (parent, args) => {
        try {
          return Project.find().sort({ create_at: -1 });
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //===========get about=======
    get_abouts: {
      type: new GraphQLList(AboutType),
      resolve: async (parent, args) => {
        try {
          return About.find().sort({ create_at: -1 });
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //===========get members=======
    get_members: {
      type: new GraphQLList(MemberType),
      resolve: async (parent, args) => {
        try {
          return Member.find().sort({ create_at: -1 });
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
  }),
});
module.exports = AdminQuery;
