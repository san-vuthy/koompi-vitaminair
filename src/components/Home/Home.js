import { Row, Col } from "antd";
import Form from "../Home/Form";
import Activities from "./Activities";
import Leaderboard from "./Leaderboard";

function Home() {
  return (
    <>
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
              <button>JOIN US</button>
            </a>
          </Col>
          <Col
            className="video"
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            lg={{ span: 12 }}
            xl={{ span: 12 }}
          >
            <video src="/video.mp4" autoPlay loop muted preload="none"></video>
          </Col>
        </Row>
      </div>
      {/* <h1 id="num">22,616,989</h1> */}
      <img style={{ width: "100%" }} src="/images/big-header.png" alt="" />
      {/* <div className="big-banner"></div> */}

      <Form />
      <Leaderboard />
      <Activities />
    </>
  );
}

export default Home;
