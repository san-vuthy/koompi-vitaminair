import React from "react";
import Galleries from "react-photo-gallery";
import { Col, Image, Row } from "antd";

const Gallery = ({ images }) => {
  return (
    <div className="gallery-section">
      <div style={{ position: "relative", width: "100%" }}>
        <Image.PreviewGroup>
          <Row gutter={[12, 8]}>
            {images.map((image, index) => {
              return (
                <Col xs={12} sm={12} md={8} xl={6} key={index}>
                  <Image src={image.src} width="100%" />
                </Col>
              );
            })}
          </Row>
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default Gallery;
