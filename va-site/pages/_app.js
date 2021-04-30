import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import AllLayout from "../components/allLayout";
import { BackTop } from "antd";
import Head from "next/head";
import "../styles/globals.css";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  // const style = {
  //   height: 57,
  //   width: 57,
  //   lineHeight: "55px",
  //   borderRadius: 29,
  //   // backgroundColor: "#319286",
  //   backgroundColor: "#4ac29a",
  //   color: "#fff",
  //   textAlign: "center",
  //   fontSize: 14,
  // };
  return (
    <ApolloProvider client={client}>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>
          VitaminAir | Reforestation | Natural Farming | Ecotourism | Seeds Bomb
          | Air Water
        </title> */}
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
