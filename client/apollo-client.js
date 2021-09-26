import { ApolloClient, InMemoryCache } from "@apollo/client";

const server = process.env.API_SECRET;
const server_local = process.env.API_SECRET_LOCAL;
const develop = process.env.NODE_ENV;

const URL_ACCESS = develop === "development" ? server_local : server;

const result = `${URL_ACCESS}/graphql`;
// console.log(URL_ACCESS);
const client = new ApolloClient({
  // uri: result,
  // uri: "http://localhost:3600/graphql",
  uri: "https://backend.vitaminair.org/graphql",
  cache: new InMemoryCache(),
});

export default client;
