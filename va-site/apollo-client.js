import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://backend.vitaminair.org/graphql",
  cache: new InMemoryCache(),
});

export default client;
