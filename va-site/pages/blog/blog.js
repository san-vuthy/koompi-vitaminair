import React from "react";
import { Row, Col, Image } from "antd";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <center className="big-title-blog">
        <h1>OUR BLOG</h1>
      </center>
      <div>
        <Row gutter={[32, 32]}>
          <Col sm={8}>
            <div className="card-item">
              <img
                style={{ maxWidth: "100%" }}
                src="/slide/trip-1.jpg"
                alt="img-blog"
              />
              <div className="blog-text">
                <h3 className="blog-text-header">Jiramera UAV Drone</h3>
                <p>
                  To reach our goal of reforesting 60% of Cambodia, which is
                  equivalent to about 5 million hectares of land, manual
                  planting alone is not going to be effective.
                </p>
                <Link href="/">
                  <a className="blog-card-btn">
                    See More <span>&rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={8}>
            <div className="card-item">
              <img
                style={{ maxWidth: "100%" }}
                src="/slide/trip-1.jpg"
                alt="img-blog"
              />
              <div className="blog-text">
                <h3 className="blog-text-header">Jiramera UAV Drone</h3>
                <p>
                  To reach our goal of reforesting 60% of Cambodia, which is
                  equivalent to about 5 million hectares of land, manual
                  planting alone is not going to be effective.
                </p>
                <Link href="/">
                  <a className="blog-card-btn">
                    See More <span>&rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={8}>
            <div className="card-item">
              <img
                style={{ maxWidth: "100%" }}
                src="/slide/trip-1.jpg"
                alt="img-blog"
              />
              <div className="blog-text">
                <h3 className="blog-text-header">Jiramera UAV Drone</h3>
                <p>
                  To reach our goal of reforesting 60% of Cambodia, which is
                  equivalent to about 5 million hectares of land, manual
                  planting alone is not going to be effective.
                </p>
                <Link href="/">
                  <a className="blog-card-btn">
                    See More <span>&rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Blog;
