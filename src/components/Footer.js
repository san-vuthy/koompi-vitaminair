import { Row, Col } from "antd";

export default function Footer() {
  return (
    <>
      <img style={{ width: "100%" }} src="/images/footer.png" alt="footer" />
      <Row className="footer" justify="space-between">
        <Col>
          <p>Contact us: info@vitaminair.org</p>
        </Col>
        <Col>
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
      {/* <div className="footer">
        <p>Contact us: info@vitaminair.org</p>
        <div className="icon">
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
        </div> 
         </div>
        */}
    </>
  );
}
