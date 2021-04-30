import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_A_PLANTS, GET_PLANTS } from "../graphql/query";
import { Col, Row, Badge, Spin, Layout } from "antd";
import Footer from "../components/footer";
import Link from "next/link";
import { FlapperSpinner } from "react-spinners-kit";
import InfiniteScroll from "react-infinite-scroll-component";
import { NextSeo } from "next-seo";

const { Content } = Layout;
const Plants = () => {
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const { loading, data, error, fetchMore } = useQuery(GET_PLANTS, {
    variables: { limit: 8, offset: 0 },
  });
  if (loading)
    return (
      <center style={{ marginTop: "400px" }}>
        <FlapperSpinner size={50} color="#00ff89" loading={loading} />
      </center>
    );
  return (
    <div className="background-body">
      <NextSeo
        title="Plants - Vitaminair"
        description="To reforest native forest and encourage diversity we need these tree species."
        canonical="https://vitaminair.org/plants"
        openGraph={{
          images: [
            {
              url:
                "https://backend.vitaminair.org/public/uploads/file-e7dd0f96-ec42-44cd-8c31-37de6adcca6b.png",
            },
          ],
          url: "https://vitaminair.org/plants",
          site_name: "vitaminair",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div className="plants-banner">
        <div className="title-plants">
          <h1>About Plants</h1>
        </div>
      </div>
      <center style={{ marginTop: "30px", padding: "30px" }}>
        <p>
          To reforest native forest and encourage diversity we need these tree
          species.
        </p>
      </center>
      <div className="container">
        <Row gutter={[32, 32]}>
          {data.get_plants.map((res) => {
            const { id } = res;
            return (
              <Col xs={24} sm={12} md={12} lg={6}>
                <Link href={`/plants/${id}`}>
                  <div className="plants-card ">
                    {/* <img
                      className="plants-image"
                      src={
                        "https://backend.vitaminair.org/public/uploads/" +
                        res.image
                      }   
                      alt="img"
                    /> */}
                    <div
                      style={{
                        backgroundImage: `url("https://backend.vitaminair.org/public/uploads//${res.image}")`,
                      }}
                      className="image-plants-style"
                    ></div>
                    <div className="plants-text">
                      <small className="badge">{res.family}</small>

                      <Row gutter={[12, 12]}>
                        <Col>
                          <h3
                            className="local-name-plants"
                            style={{ marginTop: "-5px" }}
                          >
                            {res.name}
                          </h3>
                          <p
                            className="sci-name-plants"
                            style={{ fontSize: "14px", marginTop: "-12px" }}
                          >
                            {res.sciname}
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
        <InfiniteScroll
          dataLength={data.get_plants.length}
          next={async () => {
            fetchMore({
              variables: {
                offset: data.get_plants.length,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;

                if (fetchMoreResult.get_plants.length < 8) {
                  setHasMoreItems(false);
                }

                return Object.assign({}, prev, {
                  get_plants: [
                    ...prev.get_plants,
                    ...fetchMoreResult.get_plants,
                  ],
                });
              },
            });
          }}
          hasMore={hasMoreItems}
          loader={
            <Content style={{ marginTop: "15px" }}>
              <center>
                <Spin></Spin>
              </center>
            </Content>
          }
          endMessage={null}
        ></InfiniteScroll>
      </div>
      <Footer />
    </div>
  );
};

export default Plants;
