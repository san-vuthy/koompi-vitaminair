import React, { useState } from "react";
import { Row, Col, Modal, Carousel, Image } from "antd";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS, GET_PROJECT } from "../graphql/query";
import Output from "editorjs-react-renderer";
import Footer from "../components/footer";
import { NextSeo } from "next-seo";
import images from "../components/data/gallery.json";

function Project() {
  const [id, setId] = useState("");
  const [titles, setTitle] = useState("");
  const [ddes, setDes] = useState(JSON.stringify(""));
  const [image, setImage] = useState("");
  const [modal1, setModal1] = useState(false);
  const { loading, data } = useQuery(GET_PROJECTS);
  // const { loading: loadingProject, data: dataProject } = useQuery(GET_PROJECT, {
  //   variables: { id },
  // });
  if (loading) return null;
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
      <div className="container">
        <center>
          <h3 className="title-project-gallery">Our Gallery</h3>
          {/* <h3 className="gallery-title ">Actions</h3> */}
        </center>
        <div className="gallery-section">
          <div style={{ position: "relative", width: "100%" }}>
            <Image.PreviewGroup>
              <Row gutter={[12, 8]}>
                {images.map((image, index) => {
                  return (
                    <Col xs={12} sm={12} md={8} xl={6} key={index}>
                      <Image
                        className="image-project"
                        src={image.src}
                        width="100%"
                      />
                    </Col>
                  );
                })}
              </Row>
            </Image.PreviewGroup>
          </div>
        </div>
        <h1>PROJECTS</h1>
        <p className="project-sub-desc">
          To take actions and show to people that we can work with nature and
          not against her, we bought 110 hectares of land in Kompong Seila
          surrounded by mountains and national forest, and started building the
          team to put our project development plan to work.
        </p>

        <Row gutter={[12, 12]}>
          {data.get_projects.map((res) => {
            const { id, title, des, image } = res;
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
                  setImage(image);
                }}
                xs={24}
                sm={24}
                md={12}
              >
                <div className="project-list">
                  {/* <img src={"http://localhost:3500/public/uploads/" + res.image} /> */}
                  <img
                    src={
                      "https://backend.vitaminair.org/public/uploads/" +
                      res.image
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
                </div>
              </Col>
            );
          })}
        </Row>
        <Modal
          // title={titles}
          centered
          visible={modal1}
          width={650}
          // onOk={() => setVisible(false)}
          onCancel={() => setModal1(false)}
          footer={null}
        >
          <center>
            <img
              className="project-image-icon"
              src={"https://backend.vitaminair.org/public/uploads/" + image}
              alt="img"
            />
            <div className="modal-pro">
              <h3 className="modals">{titles}</h3>
              <Output data={JSON.parse(ddes)} />
            </div>
          </center>
        </Modal>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
