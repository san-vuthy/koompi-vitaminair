import { Row, Col } from "antd";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-page">
      <img style={{ width: "100%" }} src="/images/footer.png" alt="footer" />
      <Row className="footer" align="middle" justify="space-between">
        <Col>
          <p className="footer-p">Contact us: tree@vataminair.org</p>
        </Col>
        <Col>
          <a
            href="https://web.facebook.com/VitaminAirHome"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/company/vitaminair/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.youtube.com/channel/UCL_dER70Hn-OncQ52BXQYLg"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>

          <a href="https://t.me/vitaminair" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
