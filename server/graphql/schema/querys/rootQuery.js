const { query } = require("express");
const graphql = require("graphql");
const { getMaxListeners, db, collection } = require("../../../model/donate");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLInt } =
  graphql;

//============Model Sections=========
const Donate = require("../../../model/donate");
const Initation = require("../../../model/initation");
const Project = require("../../../model/project");
const About = require("../../../model/about");
const Member = require("../../../model/member");
const Blog = require("../../../model/blog");
const Plants = require("../../../model/plants");

//============Type Sections==========
const DonateType = require("../types/donateType");
const Initationtype = require("../types/initationType");
const ProjectType = require("../types/projectType");
const AboutType = require("../types/aboutType");
const MemberType = require("../types/memeberType");
const BlogType = require("../types/blogType");
const PlantsType = require("../types/plantsType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //============get Donation===========
    get_donations: {
      type: new GraphQLList(DonateType),
      args: {
        limit: {
          // name: "limit",
          type: GraphQLInt,
        },
        offset: {
          // name: "offset",
          type: GraphQLInt,
        },
      },
      resolve(parent, args) {
        const { offset = 0, limit = 8 } = args;
        return Donate.find({ isContact: true })
          .limit(limit)
          .skip(offset)
          .sort({ create_at: -1 });
      },
    },
    //==========get the most tree========
    get_most_trees: {
      type: new GraphQLList(DonateType),
      args: {
        limit: {
          // name: "limit",
          type: GraphQLInt,
        },
        offset: {
          // name: "offset",
          type: GraphQLInt,
        },
      },
      resolve: async (parent, args) => {
        const { offset = 0, limit = 8 } = args;
        try {
          return Donate.find({ isContact: true })
            .limit(limit)
            .skip(offset)
            .sort({ tree: -1 });
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //========get initation============
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
    get_project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findOne({ _id: args.id });
      },
    },

    get_project_title: {
      type: ProjectType,
      args: { title: { type: GraphQLString } },
      resolve(parent, args) {
        return Project.findOne({ title: args.title });
      },
    },

    get_project_slug: {
      type: ProjectType,
      args: { slug: { type: GraphQLString } },
      resolve(parent, args) {
        return Project.findOne({ slug: args.slug });
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
    //==========Get blogs==========
    get_blogs: {
      type: new GraphQLList(BlogType),
      args: {
        limit: {
          name: "limit",
          type: GraphQLInt,
        },
        offset: {
          name: "offset",
          type: GraphQLInt,
        },
      },
      resolve: async (parent, { limit = null, offset = null }) => {
        try {
          return Blog.find().limit(limit).skip(offset).sort({ create_at: -1 });
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //==========Get an blog==========
    get_blog: {
      type: BlogType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Blog.findOne({ _id: args.id });
      },
    },

    get_blog_title: {
      type: BlogType,
      args: { title: { type: GraphQLString } },
      resolve(parent, args) {
        return Blog.findOne({ title: args.title });
      },
    },

    get_blog_slug: {
      type: BlogType,
      args: { slug: { type: GraphQLString } },
      resolve(parent, args) {
        return Blog.findOne({ slug: args.slug });
      },
    },

    //=======get more Plants

    get_plants: {
      type: new GraphQLList(PlantsType),
      args: {
        // id: { type: GraphQLString },
        limit: {
          name: "limit",
          type: GraphQLInt,
        },
        offset: {
          name: "offset",
          type: GraphQLInt,
        },
      },
      resolve: async (parent, { limit = null, offset = null }) => {
        try {
          return Plants.find()
            .limit(limit)
            .skip(offset)
            .sort({ create_at: -1 });
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //==========Get a Plants==========
    get_a_plants: {
      type: PlantsType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Plants.findOne({ _id: args.id });
      },
    },

    get_a_plant_name: {
      type: PlantsType,
      args: { name: { type: GraphQLString } },
      resolve(parent, args) {
        return Plants.findOne({ name: args.name });
      },
    },
    get_a_plant_slug: {
      type: PlantsType,
      args: { slug: { type: GraphQLString } },
      resolve(parent, args) {
        return Plants.findOne({ slug: args.slug });
      },
    },
  },
});
module.exports = RootQuery;
