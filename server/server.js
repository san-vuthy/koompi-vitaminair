require("dotenv").config();
const express = require("express");
const cors = require("cors");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema/schema");
const connectDB = require("./config/db");
const app = express();

//Initial Middleware
app.use(express.json({ extend: false }));
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

//===== ConnectDatabase ======
connectDB();

const PORT = 3500;
app.listen(PORT, console.log(`Server Running on Port ${PORT}`.cyan.bold));
