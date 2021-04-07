import React, { useState } from "react";
import { Row, Col, Modal, Carousel } from "antd";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS, GET_PROJECT } from "../graphql/query";
import Output from "editorjs-react-renderer";
import Footer from "../components/footer";
import { NextSeo } from "next-seo";

function Project() {
  const [id, setId] = useState("");
  const [titles, setTitle] = useState("");
  const [ddes, setDes] = useState(JSON.stringify(""));
  const [modal1, setModal1] = useState(false);
  const { loading, data } = useQuery(GET_PROJECTS);
  const { loading: loadingProject, data: dataProject } = useQuery(GET_PROJECT, {
    variables: { id },
  });
  if (loading || loadingProject) return null;
  return (
    <div className="background-body">
      <NextSeo
        title="Vitaminair Project"
        description="Reforestation | Natural Farming | Eco-adventure Tourism | Airto Water | Jiramera UAV Drone"
        canonical="http://demo.vitaminair.org/projects"
        openGraph={{
          images: [
            {
              url:
                "https://backend.vitaminair.org/public/uploads/file-1d2a35e8-4414-4da2-bbc5-726fb7e91408.jpg",
            },
          ],
        }}
      />
      {/* <Navbar /> */}
      <Carousel autoplay infinite autoplaySpeed={2000}>
        <div>
          <img style={{ maxWidth: "100%" }} src="/slide/trips-1-.jpg" />
        </div>
        <div>
          <img style={{ maxWidth: "100%" }} src="/slide/va-home.jpg" />
        </div>
        <div>
          <img style={{ maxWidth: "100%" }} src="/slide/trip-3.jpg" />
        </div>
        <div>
          <img style={{ maxWidth: "100%" }} src="/slide/trip-4.jpg" />
        </div>
        <div>
          <img style={{ maxWidth: "100%" }} src="/slide/mountain.jpg" />
        </div>
        <div>
          <img
            style={{ maxWidth: "100%" }}
            src="/slide/isi-tree-planting-2.jpg"
          />
        </div>
      </Carousel>

      <div className="container">
        <h1>PROJECTS</h1>
        <Row className="projects" justify="center">
          {data.get_projects.map((res) => {
            const { id, title, des } = res;
            const result = <Output data={JSON.parse(res.des)} />;
            return (
              <Col
                key={res.id}
                style={{ cursor: "pointer" }}
                onClick={async () => {
                  setModal1(true);
                  setTitle(title);
                  setId(id);
                  setDes(des);
                }}
                xs={{ span: 24 }}
                lg={{ span: 11 }}
                className="project-list"
              >
                {/* <img src={"http://localhost:3500/public/uploads/" + res.image} /> */}
                <img
                  src={
                    "https://backend.vitaminair.org/public/uploads/" + res.image
                  }
                  alt="img"
                />
                <div className="info">
                  <h3>{res.title}</h3>
                  <p>
                    {/* {`${
                      result.props.data.blocks[0].data.text.length < 10
                        ? result.props.data.blocks[0].data.text
                        : result.props.data.blocks[0].data.text.substring(0, 10) +
                          "..."
                    }`} */}
                    {`${result.props.data.blocks[0].data.text.substring(
                      0,
                      80
                    )}...`}
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
        <Modal
          title={titles}
          centered
          visible={modal1}
          // onOk={() => setVisible(false)}
          onCancel={() => setModal1(false)}
          width={1000}
          footer=""
        >
          <Output data={JSON.parse(ddes)} />
        </Modal>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
