const graphql = require("graphql");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { JwtSecret } = process.env;
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLID,
} = graphql;

//============Model Sections=========
const Donate = require("../../../model/donate");
const User = require("../../../model/user");
const Initation = require("../../../model/initation");
const Project = require("../../../model/project");
const About = require("../../../model/about");
const Member = require("../../../model/member");
//============Type Sections==========
const DonateType = require("../types/donateType");
const UserType = require("../types/userType");
const InitationType = require("../types/initationType");
const ProjectType = require("../types/projectType");
const AboutType = require("../types/aboutType");
const MemberType = require("../types/memeberType");

const AdminMutation = new GraphQLObjectType({
  name: "adminMuntationType",
  fields: () => ({
    //==========Donations===========
    donation: {
      type: DonateType,
      args: {
        tree: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
        user_message: { type: GraphQLNonNull(GraphQLString) },
        selectType: { type: GraphQLNonNull(GraphQLString) },
        team: { type: GraphQLNonNull(GraphQLString) },
        anonymous: { type: GraphQLBoolean },
        public: { type: GraphQLBoolean },
      },
      resolve: async (parent, args) => {
        try {
          const donate = new Donate({ ...args });
          await donate.save();
          return { message: "Donation successfull!" };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //============Delete Donationer===========
    delete_donationer: {
      type: DonateType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        try {
          await Donate.deleteOne({ _id: args.id });
          return { message: "Delete Successfull" };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //=============Create_User=============
    register: {
      type: UserType,
      args: {
        fullname: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const isEmails = await User.findOne({ email: args.email });
          if (isEmails) {
            throw new Error("Email already Exist");
          }
          //bcrypt password in database
          const salt = await bcrypt.genSalt(12);
          const hashPassword = await bcrypt.hash(args.password, salt);
          let NewUser = new User({
            fullname: args.fullname,
            email: args.email,
            password: hashPassword,
          });
          await NewUser.save();
          return { message: "Successful" };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //==========Login=============
    login: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args, context) => {
        try {
          const user = await User.findOne({ email: args.email });
          if (!user) {
            return {
              messsage: "Login failed",
            };
          }
          const isMatch = await bcrypt.compare(args.password, user.password);
          if (!isMatch) {
            return {
              message: "Login failed",
            };
          } else {
            const token = jwt.sign(
              {
                email: user.email,
                name: user.name,
                id: user.id,
              },
              JwtSecret,
              {
                expiresIn: "24h",
              }
            );
            return {
              token: token,
              name: user.name,
              id: user.id,
              message: "Login successful",
            };
          }
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //===========add initation=========
    add_initation: {
      type: InitationType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
        des: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const initation = new Initation({ ...args });
          await initation.save();
          return { message: "Add initation successfull" };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //==========delete initation============
    delete_initation: {
      type: InitationType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        try {
          await Initation.deleteOne({ _id: args.id });
          return { message: "Delete Successfull" };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //===========Edit initation========
    edit_initation: {
      type: InitationType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        des: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (root, args) => {
        try {
          await Initation.findByIdAndUpdate({ _id: args.id }, { ...args });
          return {
            message: "update successfull",
          };
        } catch (error) {
          console.log(error);
        }
      },
    },
    //================add Project=============
    add_project: {
      type: ProjectType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
        des: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const project = new Project({ ...args });
          await project.save();
          return { message: "Successfull" };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //==========edit_project========
    edit_project: {
      type: ProjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        des: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (root, args) => {
        try {
          await Project.findByIdAndUpdate({ _id: args.id }, { ...args });
          return {
            message: "edit successfull",
          };
        } catch (error) {
          console.log(error);
        }
      },
    },
    //========delete_project=============
    delete_project: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        try {
          await Project.deleteOne({ _id: args.id });
          return { message: "Delete Successfull" };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //========add about========
    add_about: {
      type: AboutType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        des: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const about = new About({ ...args });
          await about.save();
          return { message: "Successfull" };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //========edit about=======
    edit_about: {
      type: AboutType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        des: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (root, args) => {
        try {
          await About.findByIdAndUpdate({ _id: args.id }, { ...args });
          return {
            message: "Successfull",
          };
        } catch (error) {
          console.log(error);
        }
      },
    },
    //========delete about=============
    delete_about: {
      type: AboutType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        try {
          await About.deleteOne({ _id: args.id });
          return { message: "Delete Successfull" };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //==========add member=======
    add_member: {
      type: MemberType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        position: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const member = new Member({ ...args });
          await member.save();
          return { message: "Successfull" };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //========edit member=======
    edit_member: {
      type: MemberType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        position: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async (root, args) => {
        try {
          await Member.findByIdAndUpdate({ _id: args.id }, { ...args });
          return {
            message: "Successfull",
          };
        } catch (error) {
          console.log(error);
        }
      },
    },
    //=========delete memeber==========
    delete_member: {
      type: MemberType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        try {
          await Member.deleteOne({ _id: args.id });
          return { message: "Delete Successfull" };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
  }),
});

module.exports = AdminMutation;
