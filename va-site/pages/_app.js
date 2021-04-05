import "../styles/globals.css";
import "../styles/styles.css";
import "../styles.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import AllLayout from "../components/allLayout";
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
