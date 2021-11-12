import { Row, Col, Button } from "antd";
import Navbar from "../components/navbar";
import InfoForm from "./home/inforForm";
import Initiation from "./home/initiation";
// import InfoForm from "./InfoForm";
// import Activities from "./Activities";
import Leaderboard from "./home/leaderBoard";
import Footer from "../components/footer";
import { NextSeo } from "next-seo";

function Home() {
  return (
    <div className="background-body">
      <NextSeo
        title="Home - Vitaminair"
        description="Protect, preserve, and restore our rain forests for generations ahead. Protect, preserve, and restore our rain forests for generations ahead."
        canonical="https://vitaminair.org"
        openGraph={{
          images: [
            {
              url: "/home.png",
            },
          ],
          url: "https://vitaminair.org",
          site_name: "vitaminair",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <img className="cloud" src="/images/cloud2.png" alt="cloud" />
      <img className="cloud2" src="/images/cloud2.png" alt="cloud" />
      <img className="cloud3" src="/images/cloud2.png" alt="cloud" />

      <div className="home-banner">
        <div className="container">
          <Row className="banner" justify="space-between" align="middle">
            <Col
              className="text"
              xs={24}
              sm={24}
              md={12}
              lg={14}
              // xs={{ span: 24 }}
              // sm={{ span: 24 }}
              // lg={{ span: 10 }}
              // xl={{ span: 10 }}
            >
              <p
                className="home-text-title"
                style={{
                  fontSize: "22px",
                  color: "#0D330A",
                  fontWeight: "700",
                }}
              >
                In search of
              </p>
              <h2>The Next Small Things</h2>
              <p className="desc-home-top" style={{ margin: "20px 0" }}>
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
              xs={24}
              sm={24}
              md={12}
              lg={10}
              // xs={{ span: 24 }}
              // sm={{ span: 24 }}
              // lg={{ span: 12 }}
              // xl={{ span: 12 }}
            >
              <img className="earth" src="/images/Green-World.png "></img>
            </Col>
          </Row>
        </div>
        <div className="big-banner"></div>
      </div>
      <div className="home-form">
        <InfoForm />
        <Leaderboard />
        <Initiation />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
