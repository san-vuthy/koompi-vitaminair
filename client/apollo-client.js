import { ApolloClient, InMemoryCache } from "@apollo/client";

const server = process.env.API_SECRET;
const server_local = process.env.API_SECRET_LOCAL;
const develop = process.env.NODE_ENV;

const URL_ACCESS = develop === "development" ? server_local : server;

const result = `${URL_ACCESS}/graphql`;

const client = new ApolloClient({
  uri: result,
  cache: new InMemoryCache(),
});

export default client;
