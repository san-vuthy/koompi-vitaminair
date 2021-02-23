const graphql = require("graphql")
require("dotenv").config()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const { JwtSecret } = process.env

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
} = graphql

//============Model Sections=========
const Donate = require("../../../model/donate")
const User = require("../../../model/user")
//============Type Sections==========
const DonateType = require("../types/donateType")
const UserType = require("../types/userType")

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
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
        anonymous: { type: GraphQLBoolean },
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
          const isEmails = await User.findOne({ email: args.email })
          if (isEmails) {
            throw new Error("Email already Exist")
          }
          //bcrypt password in database
          const salt = await bcrypt.genSalt(12)
          const hashPassword = await bcrypt.hash(args.password, salt)
          let NewUser = new User({
            fullname: args.fullname,
            email: args.email,
            password: hashPassword,
          })
          await NewUser.save()
          return { message: "Successful" }
        } catch (error) {
          console.log(error)
          throw error
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
          const user = await User.findOne({ email: args.email })
          if (!user) {
            return {
              messsage: "Login failed",
            }
          }
          const isMatch = await bcrypt.compare(args.password, user.password)
          if (!isMatch) {
            return {
              message: "Login failed",
            }
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
            )
            return {
              token: token,
              name: user.name,
              id: user.id,
              message: "Login successful",
            }
          }
        } catch (error) {
          console.log(error)
          throw error
        }
      },
    },
  }),
})
module.exports = RootMutation
