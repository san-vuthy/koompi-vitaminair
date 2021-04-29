import React from "react";
import { Row, Col, Image } from "antd";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/query";
import Output from "editorjs-react-renderer";
import Footer from "../components/footer";
import { NextSeo } from "next-seo";
import images from "../components/data/gallery.json";
import Link from "next/link";
import Blog from "./blog/blog";
import { FlapperSpinner } from "react-spinners-kit";

function Project() {
  const { loading, data } = useQuery(GET_PROJECTS);
  // const { loading: loadingProject, data: dataProject } = useQuery(GET_PROJECT, {
  //   variables: { id },
  // });
  if (loading)
    return (
      <center style={{ marginTop: "400px" }}>
        <FlapperSpinner size={50} color="#00ff89" loading={loading} />
      </center>
    );

  console.log("data", data);

  return (
    <div className="background-body">
      <NextSeo
        title="Project - Vitaminair"
        description="To take actions and show to people that we can work with nature and not against her, we bought 110 hectares of land in Kompong Seila surrounded by mountains and national forest, and started building the team to put our project development plan to work."
        canonical="https://vitaminair.org/project"
        openGraph={{
          images: [
            {
              url: "/project.png",
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

      <div className="container">
        {/* <center>
          <h3 className="title-project-gallery">Our Gallery</h3>
        </center> */}
        <br />
        <br />
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
                        placeholder={
                          <Image
                            className="image-project"
                            preview={false}
                            src="data:image/png;base64,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"
                            width="100%"
                          />
                        }
                      />
                      {/* <Image
                        className="image-project"
                        src={image.src}
                        width="100%"
                      /> */}
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

        <div className="container-projects">
          <Row gutter={[24, 24]}>
            {data.get_projects.map((res) => {
              const { id } = res;
              const result = <Output data={JSON.parse(res.des)} />;
              return (
                <Col
                  key={res.id}
                  style={{ cursor: "pointer" }}
                  // onClick={async () => {
                  //   setModal1(true);
                  //   setTitle(title);
                  //   setId(id);
                  //   setDes(des);
                  //   setImage(image);
                  // }}
                  xs={24}
                  sm={24}
                  md={12}
                >
                  <Link href={`/project/${id}`}>
                    <a>
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
                    </a>
                  </Link>
                </Col>
              );
            })}
          </Row>
          <Blog />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
