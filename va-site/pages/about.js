import React, { useState } from "react";
import { List, Row, Col, Spin } from "antd";
import { useQuery } from "@apollo/client";
import { GET_ABOUTS, GET_MEMBERS, GET_ABOUT } from "../graphql/query";
import Output from "editorjs-react-renderer";
import Footer from "../components/footer";
import { NextSeo } from "next-seo";
import { FlapperSpinner } from "react-spinners-kit";

function About() {
  const data = [
    "Sustainability, peace, love, harmony, sharing, growth, and abundance, with a focus on setting a good example for generations into the future.",
    "To live together in a collaborative community, encouraging each other and our surrounding communities to live in harmony with each other and our natural environment.",
    "To grow in size and recognition to influence others around the world by example, education, and research.",
    "To facilitate workshops, adventure tours, and retreats that promote personal growth and sustainable lifestyles.",
    "To offer re-education and employment opportunities for local families engaged in illegal forest activities.",
    "To discover and create innovative business and employment opportunities for Cambodian youths.",
  ];
  const [id, setId] = useState("");
  const [titles, setTitle] = useState("");
  const [ddes, setDes] = useState(JSON.stringify(""));
  const [modal1, setModal1] = useState(false);
  const { loading: aboutLoading, data: aboutData } = useQuery(GET_ABOUTS);
  const { loading: memberLoading, data: memberData } = useQuery(GET_MEMBERS);

  // if (aboutLoading || memberLoading) return null;
  // console.log("data", about_data)
  if (aboutLoading || memberLoading)
    return (
      <center style={{ marginTop: "400px" }}>
        <Spin></Spin>
      </center>
    );
  return (
    <div className="background-body">
      <NextSeo
        title="About - Vitaminair"
        description="To take actions and show to people that we can work with nature and not against her, we bought 110 hectares of land in Kompong Seila surrounded by mountains and national forest, and started building the team to put our project development plan to work."
        canonical="https://vitaminair.org/about"
        openGraph={{
          images: [
            {
              url: "/about.png",
            },
          ],
          url: "https://vitaminair.org/about",
          site_name: "vitaminair",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <div className="about-banner">
        <h1>About Us</h1>
      </div>
      <div className="container-des-about">
        {/* <h3 className="title-about">About Us</h3> */}
        <p className="desc-about">
          A catalyst for global movement to reforest the rainforest and
          regenerate our ecosystem through platforms and models that incorporate
          technology and designs inspired by nature. In the process, we hope to
          grow a community of people engaging in social, cultural ecological and
          economic regeneration.
        </p>
      </div>
      <div className="container-about" style={{ marginTop: "30px" }}>
        <div className="about">
          <Row gutter={[32, 32]} className="about-card">
            {aboutData.get_abouts.map((res) => {
              const { id, title, des } = res;
              const result = <Output data={JSON.parse(res.des)} />;
              return (
                <Col
                  onClick={() => {
                    // shows()
                    setModal1(true);
                    setTitle(title);
                    setId(id);
                    setDes(des);
                  }}
                  xs={24}
                  lg={8}
                  xl={8}
                >
                  <div className="card">
                    <img
                      className="img-about"
                      src="/images/flower.png"
                      alt=""
                    />
                    <h2>{res.title}</h2>
                    {/* <p>{res.des}</p> */}
                    <p>
                      {/* {" "}
                    {`${result.props.data.blocks[0].data.text.substring(
                      0,
                      200
                    )}...`} */}
                      {result}
                    </p>
                  </div>
                  {/* <Output data={JSON.parse(res.des)} /> */}
                </Col>
              );
            })}
          </Row>
          <div className="about-container">
            <div className="objective">
              <h2 style={{ textAlign: "left" }}>OUR OBJECTIVE</h2>
              {/* <img src="/images/Rectangle.png" alt="img" /> */}
              <List
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <p>{item}</p>
                  </List.Item>
                )}
              />
            </div>

            <div className="team-member">
              <div className="member-des">
                <h1>TEAM MEMBER</h1>
                <p>
                  We are a team of progressive, passionate, and idea driven
                  people.
                </p>
              </div>
              <Row gutter={[18, 18]}>
                {memberData.get_members.map((res, index) => {
                  return (
                    <Col key={index} xs={12} md={8} lg={6}>
                      <div className="member">
                        <img
                          // src={"http://localhost:3500/public/uploads/" + res.image}
                          src={
                            "https://backend.vitaminair.org/public/uploads/" +
                            res.image
                          }
                          alt={res.name}
                          className="img-responsive"
                        />
                        <h3 className="name-owner">{res.name}</h3>
                        <p className="position">{res.position}</p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>

            <br />
            <br />
            <h1 style={{ marginTop: "30px" }}>OUR PARTNERS</h1>

            {/* <p style={{ textAlign: "center" }}>
            We're especially pleased to have built strategic partnerships with
            forward thinking leaders in the business world.
          </p> */}

            <Row
              className="partner"
              align="middle"
              justify="center"
              gutter={{ xs: 0, md: 40 }}
            >
              <Col xs={12} sm={12} md={8} xl={4} className="gutter-row">
                <img src="/images/partner/smallworld.png" alt="logo" />
              </Col>
              <Col xs={12} sm={12} md={8} xl={4} className="gutter-row">
                <img src="/images/partner/koompi.png" alt="logo" />
              </Col>
              <Col xs={12} sm={12} md={8} xl={4} className="gutter-row">
                <img src="/images/partner/sabay.png" alt="logo" />
              </Col>
              <Col xs={12} sm={12} md={8} xl={4} className="gutter-row">
                <img
                  style={{ width: "120px" }}
                  src="/images/partner/doer.png"
                  alt="logo"
                />
              </Col>
              <Col xs={12} sm={12} md={8} xl={4} className="gutter-row">
                <img
                  style={{ width: "80px" }}
                  src="/images/partner/isi-group.png"
                  alt="logo"
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
