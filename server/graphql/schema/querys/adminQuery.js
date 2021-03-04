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
    //==========Get initation==========
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
    //==========Get initation==========
    get_initation: {
      type: Initationtype,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Initation.findOne({ _id: args.id });
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
    //==========Get project==========
    get_project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findOne({ _id: args.id });
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
    //==========Get about==========
    get_about: {
      type: AboutType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return About.findOne({ _id: args.id });
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
    //==========Get Member==========
    get_member: {
      type: MemberType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Member.findOne({ _id: args.id });
      },
    },
  }),
});
module.exports = AdminQuery;
