import { Row, Col } from "antd";

function Activities() {
  return (
    <div>
      <h1>OUR ACTIVITIES</h1>
      <div className="container activities">
        <div className="card">
          <Row>
            <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 24 }}>
              <Row align="middle" className="cardbox" gutter={[20, 20]}>
                <Col xs={{ span: 24 }} xl={{ span: 9 }} xxl={{ span: 9 }}>
                  <img
                    style={{ width: "100%" }}
                    src="/images/activities/image 1.jpg"
                    alt="activities"
                  />
                </Col>
                <Col xs={{ span: 24 }} xl={{ span: 14 }} xxl={{ span: 15 }}>
                  <h3>A life changing learning experience for everyone</h3>
                  <p style={{ margin: "15px 0" }}>
                    To set the Vitamin Air Initiative into motion, we must hire
                    two full-time Teachers and two full-time Forest Rangers.
                  </p>
                  <p>
                    Salaries are budgeted at a cost of 200 USD per month for
                    each of the four positions, and with an additional 200 USD
                    per month for kitchen, operational and development expense,
                    we anticipate a total monthly budget of 1000 USD per month.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 24 }}>
              <Row align="middle" className="cardbox" gutter={[20, 20]}>
                <Col xs={{ span: 24 }} xl={{ span: 9 }} xxl={{ span: 9 }}>
                  <img
                    style={{ width: "100%" }}
                    src="/images/activities/image 1.jpg"
                    alt="activities"
                  />
                </Col>
                <Col xs={{ span: 24 }} xl={{ span: 14 }} xxl={{ span: 15 }}>
                  <h3>A life changing learning experience for everyone</h3>
                  <p style={{ margin: "15px 0" }}>
                    To set the Vitamin Air Initiative into motion, we must hire
                    two full-time Teachers and two full-time Forest Rangers.
                  </p>
                  <p>
                    Salaries are budgeted at a cost of 200 USD per month for
                    each of the four positions, and with an additional 200 USD
                    per month for kitchen, operational and development expense,
                    we anticipate a total monthly budget of 1000 USD per month.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 24 }}>
              <Row align="middle" className="cardbox" gutter={[20, 20]}>
                <Col xs={{ span: 24 }} xl={{ span: 9 }} xxl={{ span: 9 }}>
                  <img
                    style={{ width: "100%" }}
                    src="/images/activities/image 1.jpg"
                    alt="activities"
                  />
                </Col>
                <Col xs={{ span: 24 }} xl={{ span: 14 }} xxl={{ span: 15 }}>
                  <h3>A life changing learning experience for everyone</h3>
                  <p style={{ margin: "15px 0" }}>
                    To set the Vitamin Air Initiative into motion, we must hire
                    two full-time Teachers and two full-time Forest Rangers.
                  </p>
                  <p>
                    Salaries are budgeted at a cost of 200 USD per month for
                    each of the four positions, and with an additional 200 USD
                    per month for kitchen, operational and development expense,
                    we anticipate a total monthly budget of 1000 USD per month.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Activities;
