import { List, Row, Col } from "antd"
import { useQuery } from "@apollo/client"
import { GET_ABOUTS, GET_MEMBERS } from "../graphql/query"
import Output from "editorjs-react-renderer"
function About() {
  const data = [
    "Sustainability, peace, love, harmony, sharing, growth, and abundance, with a focus on setting a good example for generations into the future.",
    "To live together in a collaborative community, encouraging each other and our surrounding communities to live in harmony with each other and our natural environment.",
    "To grow in size and recognition to influence others around the world by example, education, and research.",
    "To facilitate workshops, adventure tours, and retreats that promote personal growth and sustainable lifestyles.",
    "To offer re-education and employment opportunities for local families engaged in illegal forest activities.",
    "To discover and create innovative business and employment opportunities for Cambodian youths.",
  ]
  const { loading: aboutLoading, data: aboutData } = useQuery(GET_ABOUTS)
  const { loading: memberLoading, data: memberData } = useQuery(GET_MEMBERS)
  if (aboutLoading || memberLoading) return null

  return (
    <div>
      <div className="about-banner">
        <h1>About Us</h1>
      </div>
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="objective">
          <h2 style={{ textAlign: "left" }}>OUR OBJECTIVE</h2>
          <img src="/images/about/Rectangle.png" alt="" />
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
          <Row className="about-card" justify="center">
            {aboutData.get_abouts.map((res) => {
              return (
                <Col
                  xs={{ span: 24 }}
                  lg={{ span: 11 }}
                  xl={{ span: 7 }}
                  className="card"
                >
                  <img src="/images/about/flower.png" alt="" />
                  <h2>{res.title}</h2>
                  {/* <p>{res.des}</p> */}

                  <Output data={JSON.parse(res.des)} />
                </Col>
              )
            })}
          </Row>

          <h1 style={{ marginTop: "30px" }}>OUR PARTNERS</h1>
          <p style={{ textAlign: "center" }}>
            We're especially pleased to have built strategic partnerships with
            forward thinking leaders in the business world.
          </p>

          <Row
            className="partner"
            align="middle"
            justify="center"
            gutter={{ xs: 0, md: 40 }}
          >
            <Col
              xs={{ span: 12 }}
              sm={{ span: 7 }}
              xl={{ span: 4 }}
              className="gutter-row"
            >
              <img src="/images/partner/smallworld.png" alt="logo" />
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 7 }}
              xl={{ span: 4 }}
              className="gutter-row"
            >
              <img src="/images/partner/koompi.png" alt="logo" />
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 7 }}
              xl={{ span: 4 }}
              className="gutter-row"
            >
              <img src="/images/partner/sabay.png" alt="logo" />
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 7 }}
              xl={{ span: 4 }}
              className="gutter-row"
            >
              <img
                style={{ width: "120px" }}
                src="/images/partner/doer.png"
                alt="logo"
              />
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 5 }}
              xl={{ span: 2 }}
              className="gutter-row"
            >
              <img
                style={{ width: "80px" }}
                src="/images/partner/isi-group.png"
                alt="logo"
              />
            </Col>
          </Row>
          <div className="team-member">
            <h1>TEAM MEMBER</h1>
            <Row gutter={[8, 8]}>
              {memberData.get_members.map((res) => {
                return (
                  <Col xs={24} md={8} lg={6}>
                    <div className="member">
                      <img
                        // src={"http://localhost:3500/public/uploads/" + res.image}
                        src={
                          "https://backend.vitaminair.org/public/uploads/" +
                          res.image
                        }
                      />
                      <h3>{res.name}</h3>
                      <p>{res.position}</p>
                    </div>
                  </Col>
                )
              })}
              {/* <Col xs={24} md={8} lg={6}>
                <div className="member">
                  <img src="/images/member/member.png" alt="" />
                  <h3>MR Ajfdjkfa</h3>
                  <p>Developer</p>
                </div>
              </Col>
              <Col xs={24} md={8} lg={6}>
                <div className="member">
                  <img src="/images/member/member.png" alt="" />
                  <h3>MR Ajfdjkfa</h3>
                  <p>Developer</p>
                </div>
              </Col>
              <Col xs={24} md={8} lg={6}>
                <div className="member">
                  <img src="/images/member/member.png" alt="" />
                  <h3>MR Ajfdjkfa</h3>
                  <p>Developer</p>
                </div>
              </Col>
              <Col xs={24} md={8} lg={6}>
                <div className="member">
                  <img src="/images/member/member.png" alt="" />
                  <h3>MR Ajfdjkfa</h3>
                  <p>Developer</p>
                </div>
              </Col>
              <Col xs={24} md={8} lg={6}>
                <div className="member">
                  <img src="/images/member/member.png" alt="" />
                  <h3>MR Ajfdjkfa</h3>
                  <p>Developer</p>
                </div>
              </Col>
              <Col xs={24} md={8} lg={6}>
                <div className="member">
                  <img src="/images/member/member.png" alt="" />
                  <h3>MR Ajfdjkfa</h3>
                  <p>Developer</p>
                </div>
              </Col>
              <Col xs={24} md={8} lg={6}>
                <div className="member">
                  <img src="/images/member/member.png" alt="" />
                  <h3>MR Ajfdjkfa</h3>
                  <p>Developer</p>
                </div>
              </Col> */}
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
