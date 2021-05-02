require("dotenv").config();
const express = require("express");
const cors = require("cors");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
const uploadFile = require("./routes/uploadFile");
const schema = require("./graphql/schema/schema");
const adminSchema = require("./graphql/schema/adminSchema");
const connectDB = require("./config/db");
const app = express();
// import upload file
const path = require("path");

//Initial Middleware
app.use(express.json({ extend: false }));
// app.use(bodyParser.json());
app.use(cors());

app.use("/public/", express.static(path.join(__dirname, "public")));
//Route
app.use(uploadFile);

//========For admin dashboard========
app.use(
  "/admin",
  graphqlHTTP({
    schema: adminSchema,
    graphiql: false,
  })
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

//===== ConnectDatabase ======
connectDB();

const PORT = 3600;
app.listen(PORT, console.log(`Server Running on Port ${PORT}`.cyan.bold));
