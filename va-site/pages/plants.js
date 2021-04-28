import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_A_PLANTS, GET_PLANTS } from "../graphql/query";
import { Col, Row, Badge } from "antd";
import Footer from "../components/footer";
import Link from "next/link";
import { FlapperSpinner } from "react-spinners-kit";

const Plants = () => {
  const { loading, data, error } = useQuery(GET_PLANTS);
  if (loading)
    return (
      <center style={{ marginTop: "400px" }}>
        <FlapperSpinner size={50} color="#00ff89" loading={loading} />
      </center>
    );

  return (
    <div className="background-body">
      <div className="plants-banner">
        <div>
          <h1>Plants</h1>
        </div>
      </div>
      <div className="container">
        <Row gutter={[32, 8]}>
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
                      <small className="badge">{res.family}</small>

                      <Row gutter={[12, 12]}>
                        <Col span={20}>
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
      </div>
      <Footer />
    </div>
  );
};

export default Plants;
