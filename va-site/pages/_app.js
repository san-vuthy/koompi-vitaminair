import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import AllLayout from "../components/allLayout";
import { BackTop } from "antd";
import Head from "next/head";
import "../styles/globals.css";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <link rel="shortcut icon" href="/images/icon.png" />
      </Head>
      <NextNprogress
        color="#116832"
        startPosition={0.3}
        stopDelayMs={200}
        height="4"
      />
      <AllLayout>
        <Component {...pageProps} />
        <BackTop>
          <div className="back-top">
            <img style={{ width: "23px" }} src="/images/VA-Icon-White.png" />
          </div>
        </BackTop>
      </AllLayout>
    </ApolloProvider>
  );
}

export default MyApp;
