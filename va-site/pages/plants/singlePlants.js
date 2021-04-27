import React from "react";
// import { useQuery } from "@apollo/client";
// import { GET_A_PLANTS, GET_PLANTS } from "../../graphql/query";
import { Col, Row } from "antd";
import Link from "next/link";
const SinglePlants = ({ postsToRender }) => {
  return (
    <div>
      <Row gutter={[32, 32]}>
        {postsToRender.map((res, index) => {
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
                          {res.subname}
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
    </div>
  );
};

export default SinglePlants;
