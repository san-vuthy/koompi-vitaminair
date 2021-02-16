import { List, Row, Col } from "antd"

function About() {
  const data = [
    "Sustainability, peace, love, harmony, sharing, growth, and abundance, with a focus on setting a good example for generations into the future.",
    "To live together in a collaborative community, encouraging each other and our surrounding communities to live in harmony with each other and our natural environment.",
    "To grow in size and recognition to influence others around the world by example, education, and research.",
    "To facilitate workshops, adventure tours, and retreats that promote personal growth and sustainable lifestyles.",
    "To offer re-education and employment opportunities for local families engaged in illegal forest activities.",
    "To discover and create innovative business and employment opportunities for Cambodian youths.",
  ]

  return (
    <div>
      <div className="container">
        <h1>ABOUT US</h1>
        <div className="objective">
          <h2 style={{ textAlign: "left" }}>OBJECTIVE</h2>
          {/* <img src="/images/about/Rectangle.png" alt="" /> */}
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <p>{item}</p>
              </List.Item>
            )}
          />
        </div>
        <div className="about">
          <div className="about-card">
            <div className="card">
              <img src="/images/about/vitamin-air-min.jpg" alt="" />
              <div className="description">
                <h2>VITAMINAIR?</h2>
                <p>
                  Vitamin Air is a growing community of people actively engaged in
                  social, cultural, ecological and economic regeneration.
                </p>
              </div>
            </div>
            <div className="card">
              <img src="/images/about/vision-min.jpg" alt="" />
              <div className="description">
                <h2>VISION</h2>
                <p>
                  Our vision is to inspire others to rethink their relationship with
                  nature, to learn how to live sustainably therein, and to seek input
                  and guidance for creative new ways to provide benefit to each other
                  and our surroundings.
                </p>
              </div>
            </div>
            <div className="card">
              <img src="/images/about/Mission-min.jpg" alt="" />
              <div className="description">
                <h3>MISSION</h3>
                <p>
                  Our mission is to work together with the Royal Government of
                  Cambodia to reach and maintain a national forest cover of 60% of
                  total land area and maintain it there for generations ahead. We
                  work to reforest the rainforests, incorporating technology and
                  designs inspired by nature.
                </p>
              </div>
            </div>
          </div>

          <h1>OUR PARTNERS</h1>
          <p style={{ textAlign: "center" }}>
            We're especially pleased to have built strategic partnerships with
            forward thinking leaders in the business world.
          </p>

          <Row align="middle" justify="center" gutter={30}>
            <Col className="gutter-row">
              <img src="/images/partner/smallworld.png" alt="logo" />
            </Col>
            <Col className="gutter-row">
              <img src="/images/partner/koompi.png" alt="logo" />
            </Col>
            <Col className="gutter-row">
              <img src="/images/partner/sabay.png" alt="logo" />
            </Col>
            <Col className="gutter-row">
              <img
                style={{ width: "130px" }}
                src="/images/partner/doer.png"
                alt="logo"
              />
            </Col>
            <Col className="gutter-row">
              <img
                style={{ width: "100px" }}
                src="/images/partner/isi-group.png"
                alt="logo"
              />
            </Col>
          </Row>
          <div className="team-member">
            <h1>TEAM MEMBER</h1>
            <Row className="member" justify="center">
              <Col xs={{ span: 10 }} md={{ span: 7 }} lg={{ span: 5 }}>
                <img src="/images/member/member.png" alt="" />
                <h3>MR Ajfdjkfa</h3>
                <p>Developer</p>
              </Col>{" "}
              <Col xs={{ span: 10 }} md={{ span: 7 }} lg={{ span: 5 }}>
                <img src="/images/member/member.png" alt="" />
                <h3>MR Ajfdjkfa</h3>
                <p>Developer</p>
              </Col>
              <Col xs={{ span: 10 }} md={{ span: 7 }} lg={{ span: 5 }}>
                <img src="/images/member/member.png" alt="" />
                <h3>MR Ajfdjkfa</h3>
                <p>Developer</p>
              </Col>{" "}
              <Col xs={{ span: 10 }} md={{ span: 7 }} lg={{ span: 5 }}>
                <img src="/images/member/member.png" alt="" />
                <h3>MR Ajfdjkfa</h3>
                <p>Developer</p>
              </Col>
              <Col xs={{ span: 10 }} md={{ span: 7 }} lg={{ span: 5 }}>
                <img src="/images/member/member.png" alt="" />
                <h3>MR Ajfdjkfa</h3>
                <p>Developer</p>
              </Col>{" "}
              <Col xs={{ span: 10 }} md={{ span: 7 }} lg={{ span: 5 }}>
                <img src="/images/member/member.png" alt="" />
                <h3>MR Ajfdjkfa</h3>
                <p>Developer</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
