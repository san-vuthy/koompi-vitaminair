// import Head from "next/head";
// import Navbar from "../components/navbar";
// import styles from "../styles/Home.module.css";

// export default function Home() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{" "}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{" "}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   );
// }

import { Row, Col, Button } from "antd";
import Navbar from "../components/navbar";
import InfoForm from "./home/inforForm";
import Initiation from "./home/initiation";
// import InfoForm from "./InfoForm";
// import Activities from "./Activities";
import Leaderboard from "./home/leaderBoard";

function Home() {
  return (
    <div className="background-body">
      <Navbar />
      <img className="cloud" src="/images/cloud2.png" alt="cloud" />
      <img className="cloud2" src="/images/cloud2.png" alt="cloud" />
      <img className="cloud3" src="/images/cloud2.png" alt="cloud" />
      <div className="container">
        <Row className="banner" justify="space-between" align="middle">
          <Col
            className="text"
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            lg={{ span: 10 }}
            xl={{ span: 10 }}
          >
            <p
              style={{ fontSize: "22px", color: "#0D330A", fontWeight: "700" }}
            >
              In search of
            </p>
            <h2>The Next Small Things</h2>
            <p style={{ margin: "20px 0" }}>
              Protect, preserve, and restore our rain forests for generations
              ahead. Protect, preserve, and restore our rain forests for
              generations ahead.
            </p>
            <a href="#form">
              <Button type="primary" className="join-us-btn">
                JOIN US
              </Button>
            </a>
          </Col>
          <Col
            className="video"
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            lg={{ span: 12 }}
            xl={{ span: 12 }}
          >
            <video src="/images/video.mp4" controls></video>
          </Col>
        </Row>
      </div>
      <div className="big-banner"></div>

      {/* <img className="big-banner" style={{ width: "100%" }} src="/images/big-header.png" alt="" /> */}

      <InfoForm />
      <Leaderboard />
      <Initiation />
      {/* <Activities /> */}
    </div>
  );
}

export default Home;
