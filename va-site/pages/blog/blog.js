import React from "react";
import { Row, Col, Divider } from "antd";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_BLOGS } from "../../graphql/query";
import Output from "editorjs-react-renderer";

const Blog = () => {
  const { loading, data } = useQuery(GET_BLOGS);
  if (loading) return null;
  return (
    <div>
      <center className="big-title-blog">
        <Divider plain>
          <h1>BLOG</h1>
        </Divider>
      </center>
      <div>
        <Row gutter={[24, 24]}>
          {data.get_blogs.map((res) => {
            const { id } = res;
            const result = <Output data={JSON.parse(res.des)} />;
            return (
              <Col xs={24} sm={12} md={8}>
                <div className="card-item">
                  <img
                    className="blog-image"
                    src={
                      "https://backend.vitaminair.org/public/uploads/" +
                      res.image
                    }
                    alt="img"
                  />
                  <div className="blog-text">
                    <h3 className="blog-text-header">{res.title}</h3>
                    <p>
                      {`${result.props.data.blocks[0].data.text.substring(
                        0,
                        80
                      )}...`}
                    </p>
                    <Link href={`/blog/${id}`}>
                      <a className="blog-card-btn">
                        Read More <span>&rarr;</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Blog;
