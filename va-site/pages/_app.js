import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import AllLayout from "../components/allLayout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AllLayout>
        <Component {...pageProps} />
      </AllLayout>
    </ApolloProvider>
  );
}

export default MyApp;
