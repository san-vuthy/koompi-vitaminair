import React, { useState } from 'react';
import { Row, Col, Divider, Layout, Spin } from 'antd';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { GET_BLOGS } from '../../graphql/query';
import Output from 'editorjs-react-renderer';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FlapperSpinner } from 'react-spinners-kit';
const Content = Layout;

const Blog = () => {
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const { loading, data, fetchMore } = useQuery(GET_BLOGS, {
    variables: { limit: 3, offset: 0 },
  });
  if (loading) return null;
  return (
    <React.Fragment>
      <center className="big-title-blog">
        <Divider plain>
          <h1>BLOG</h1>
        </Divider>
      </center>
      <div>
        <Row gutter={[24, 24]}>
          {data.get_blogs.map((res, index) => {
            const { id } = res;
            const result = <Output data={JSON.parse(res.des)} />;
            return (
              <Col key={index} xs={24} sm={12} md={12} lg={8}>
                <Link href={`/blog/${res.slug}`}>
                  <div className="card-item">
                    {/* <img
                    className="blog-image"
                    src={
                      "https://backend.vitaminair.org/public/uploads/" +
                      res.image
                    }
                    alt="img"
                  /> */}
                    <div
                      style={{
                        backgroundImage: `url("https://backend.vitaminair.org/public/uploads/${res.image}")`,
                      }}
                      className="image-blogs-style"
                    ></div>
                    <div className="blog-text">
                      <h3 className="blog-text-header">{res.title}</h3>
                      <p>
                        {`${result.props.data.blocks[0].data.text.substring(
                          0,
                          80
                        )}...`}
                      </p>
                      {/* <Link href={`/blog/${id}`}>
                      <a className="blog-card-btn">
                        Read More <span>&rarr;</span>
                      </a>
                    </Link> */}
                    </div>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
        <InfiniteScroll
          dataLength={data.get_blogs.length}
          next={async () => {
            fetchMore({
              variables: {
                offset: data.get_blogs.length,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;

                if (fetchMoreResult.get_blogs.length < 3) {
                  setHasMoreItems(false);
                }

                return Object.assign({}, prev, {
                  get_blogs: [...prev.get_blogs, ...fetchMoreResult.get_blogs],
                });
              },
            });
          }}
          hasMore={hasMoreItems}
          loader={
            <center style={{ marginTop: '50px' }}>
              <Spin></Spin>
            </center>
          }
          endMessage={null}
        ></InfiniteScroll>
      </div>
    </React.Fragment>
  );
};

export default Blog;
