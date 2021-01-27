import { Row, Col } from "antd";

export default function Footer() {
  return (
    <div className="footer">
      <Row
        justify="center"
        gutter={[{ xs: 0, sm: 0, md: 60, lg: 60 }, { xs: 20 }]}
        style={{ textAlign: "center" }}
      >
        <Col className="gutter-row">
          <img style={{ width: "70px" }} src="/images/logo-black.png" alt="" />
        </Col>
        <Col className="gutter-row">
          <h2>Contact Us</h2>
          <p>info@vitaminair.org</p>
        </Col>
        <Col className="gutter-row">
          <h2>Follow Us</h2>

          <a href="https://www.linkedin.com/company/vitaminair/">
            <i className="fab fa-linkedin" />{" "}
          </a>

          <a href="https://www.youtube.com/channel/UCL_dER70Hn-OncQ52BXQYLg">
            {" "}
            <i className="fab fa-youtube" />
          </a>

          <a href="https://t.me/vitaminair">
            {" "}
            <i className="fab fa-telegram-plane" />
          </a>
        </Col>
      </Row>
    </div>
  );
}
