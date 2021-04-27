import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_A_PLANTS, GET_PLANTS } from "../graphql/query";
import { Col, Row, Badge } from "antd";
import Footer from "../components/footer";
import Link from "next/link";
import SinglePlants from "./plants/singlePlants";

const postsPerPage = 3;
let arrayForHoldingPosts = [];
const Plants = () => {
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);
  const { loading, data, error } = useQuery(GET_PLANTS);
  if (loading) {
    return "loading....";
  }
  console.log(data);

  // const loopWithSlice = (start, end) => {
  //   const slicedPosts = data.slice(start, end);
  //   arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
  //   setPostsToShow(arrayForHoldingPosts);
  // };

  // useEffect(() => {
  //   loopWithSlice(0, postsPerPage);
  // }, []);

  // const handleShowMorePosts = () => {
  //   loopWithSlice(next, next + postsPerPage);
  //   setNext(next + postsPerPage);
  // };

  return (
    <div className="background-body">
      <div className="plants-banner">
        <div>
          <h1>Plants</h1>
        </div>
      </div>
      <div className="container">
        <Row gutter={[32, 32]}>
          {data.get_plants.map((res) => {
            const { id } = res;
            return (
              <Col sm={12} md={8} lg={6}>
                <Link href={`/plants/${id}`}>
                  <div className="plants-card heigth-plants-div">
                    <img
                      className="plants-image"
                      src={
                        "https://backend.vitaminair.org/public/uploads/" +
                        res.image
                      }
                      alt="img"
                    />
                    <div className="plants-text">
                      {/* <Badge
                        className="site-badge-count-109"
                        count={res.family}
                        style={{ backgroundColor: "#52c41a" }}
                      /> */}
                      <small className="badge">{res.family}</small>

                      <Row gutter={[12, 12]}>
                        <Col span={4}>
                          <img
                            style={{ maxWidth: "100%" }}
                            src="/images/Vitamin-air-circle-2-blue.png"
                            // className="avatar"
                            alt="vitaminair"
                          />
                        </Col>
                        <Col span={20}>
                          <h3 style={{ marginTop: "-5px" }}>{res.name}</h3>
                          <p style={{ fontSize: "14px", marginTop: "-12px" }}>
                            {res.sciname}
                          </p>
                          {/* <p style={{ fontSize: "14px" }}>{res.family}</p> */}
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
        {/* <Posts postsToRender={postsToShow} /> */}
        {/* <SinglePlants postsToRender={postsToShow} />
        <button onClick={handleShowMorePosts}>Load more</button> */}
      </div>
      <Footer />
    </div>
  );
};

export default Plants;
