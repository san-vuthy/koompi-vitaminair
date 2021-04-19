import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://backend.vitaminair.org/graphql",
  // uri: "http://localhost:3600/admin",
  cache: new InMemoryCache(),
});

// hello

export default client;
