import { Row, Col } from "antd";

function Activities() {
  return (
    <div>
      <h1>OUR ACTIVITIES</h1>
      <div className="activities" style={{ margin: "50px auto" }}>
        <div className="card">
          <Row className="cardbox" justify="space-between">
            <Col flex="429px">
              <img
                style={{ width: "100%" }}
                src="/images/activities/image 1.jpg"
                alt="activities"
              />
            </Col>
            <Col flex="auto" span={14}>
              <h3>A life changing learning experience for everyone</h3>
              <p style={{ margin: "15px 0" }}>
                To set the Vitamin Air Initiative into motion, we must hire two
                full-time Teachers and two full-time Forest Rangers.
              </p>
              <p>
                Salaries are budgeted at a cost of 200 USD per month for each of
                the four positions, and with an additional 200 USD per month for
                kitchen, operational and development expense, we anticipate a
                total monthly budget of 1000 USD per month.
              </p>
            </Col>
          </Row>
          <Row className="cardbox" justify="space-between">
            <Col flex="429px">
              <img
                style={{ width: "100%" }}
                src="/images/activities/image 1.jpg"
                alt="activities"
              />
            </Col>
            <Col flex="auto" span={14}>
              <h3>A life changing learning experience for everyone</h3>
              <p style={{ margin: "15px 0" }}>
                To set the Vitamin Air Initiative into motion, we must hire two
                full-time Teachers and two full-time Forest Rangers.
              </p>
              <p>
                Salaries are budgeted at a cost of 200 USD per month for each of
                the four positions, and with an additional 200 USD per month for
                kitchen, operational and development expense, we anticipate a
                total monthly budget of 1000 USD per month.
              </p>
            </Col>
          </Row>
          <Row className="cardbox" justify="space-between">
            <Col flex="429px">
              <img
                style={{ width: "100%" }}
                src="/images/activities/image 1.jpg"
                alt="activities"
              />
            </Col>
            <Col flex="auto" span={14}>
              <h3>A life changing learning experience for everyone</h3>
              <p style={{ margin: "15px 0" }}>
                To set the Vitamin Air Initiative into motion, we must hire two
                full-time Teachers and two full-time Forest Rangers.
              </p>
              <p>
                Salaries are budgeted at a cost of 200 USD per month for each of
                the four positions, and with an additional 200 USD per month for
                kitchen, operational and development expense, we anticipate a
                total monthly budget of 1000 USD per month.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Activities;
