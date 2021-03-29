// import { Row, Col, Button } from "antd";
// import LeaderBoard from "./home/leaderBoard";
// // import InfoForm from "./InfoForm";
// // import Activities from "./Activities";
// // import Leaderboard from "./Leaderboard";
// import Navbar from "../components/navbar";
// // import styles from "../styles/Home.module.css";
// import InfoForm from "./home/inforForm";

// function Home() {
//   return (
//     <>
//       <Navbar />
//       {/* <img className="cloud" src="/images/cloud2.png" alt="cloud" />
//       <img className="cloud2" src="/images/cloud2.png" alt="cloud" />
//       <img className="cloud3" src="/images/cloud2.png" alt="cloud" /> */}
//       <div className="container">
//         <Row className="banner" justify="space-between" align="middle">
//           <Col
//             className="text"
//             xs={{ span: 24 }}
//             sm={{ span: 24 }}
//             lg={{ span: 10 }}
//             xl={{ span: 10 }}
//           >
//             <p
//               // className={styles.p}
//               style={{ fontSize: "22px", color: "#0D330A", fontWeight: "700" }}
//             >
//               In search of
//             </p>
//             <h2>The Next Small Things</h2>
//             <p style={{ margin: "20px 0" }}>
//               Protect, preserve, and restore our rain forests for generations
//               ahead. Protect, preserve, and restore our rain forests for
//               generations ahead.
//             </p>
//             <a href="#form">
//               <Button type="primary" className="join-us-btn">
//                 JOIN US
//               </Button>
//             </a>
//           </Col>
//           <Col
//             className="video"
//             xs={{ span: 24 }}
//             sm={{ span: 24 }}
//             lg={{ span: 12 }}
//             xl={{ span: 12 }}
//           >
//             <video src="/images/video.mp4" controls></video>
//           </Col>
//         </Row>
//       </div>
//       <div className="big-banner"></div>
//       {/* <img className="big-banner" style={{ width: "100%" }} src="/images/big-header.png" alt="" /> */}
//       <InfoForm />
//       <LeaderBoard />
//       {/* <Activities />   */}
//     </>
//   );
// }

// export default Home;

import { Row, Col, Button } from "antd";
import Navbar from "../components/navbar";
import InfoForm from "./home/inforForm";
// import InfoForm from "./InfoForm";
// import Activities from "./Activities";
import Leaderboard from "./home/leaderBoard";

function Home() {
  return (
    <>
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
      {/* <Activities /> */}
    </>
  );
}

export default Home;
