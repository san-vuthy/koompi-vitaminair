import { useState } from "react"
import { Row, Col, Modal } from "antd"
import { IoEye } from "react-icons/io5"

function Activities() {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  return (
    <div>
      <h1>OUR INITIATION</h1>
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
                  <div className="eye-icon" onClick={() => setModal1(true)}>
                    <IoEye className="eye" />
                  </div>
                </Col>
                <Modal
                  title="TITLE1"
                  centered
                  visible={modal1}
                  // onOk={() => setVisible(false)}
                  onCancel={() => setModal1(false)}
                  width={1000}
                  footer=""
                >
                  <p>
                    To set the Vitamin Air Initiative into motion, we must hire two
                    full-time Teachers and two full-time Forest Rangers. Salaries are
                    budgeted at a cost of 200 USD per month for each of the four
                    positions, and with an additional 200 USD per month for kitchen,
                    operational and development expense, we anticipate a total
                    monthly budget of 1000 USD per month.
                  </p>
                </Modal>
                <Col xs={{ span: 24 }} xl={{ span: 14 }} xxl={{ span: 15 }}>
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
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 24 }}>
              <Row align="middle" className="cardbox" gutter={[20, 20]}>
                <Col xs={{ span: 24 }} xl={{ span: 9 }} xxl={{ span: 9 }}>
                  <img
                    onClick={() => setModal2(true)}
                    style={{ width: "100%" }}
                    src="/images/activities/image 1.jpg"
                    alt="activities"
                  />
                  <div className="eye-icon" onClick={() => setModal1(true)}>
                    <IoEye className="eye" />
                  </div>
                  <Modal
                    title="TITLE2"
                    centered
                    visible={modal2}
                    // onOk={() => setVisible(false)}
                    onCancel={() => setModal2(false)}
                    width={1000}
                    footer=""
                  >
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                      natus ullam aut ab libero harum. Temporibus, reprehenderit? Non
                      quo corporis enim quisquam architecto quasi alias pariatur,
                      tempore veritatis repellat eos.
                    </p>
                  </Modal>
                </Col>
                <Col xs={{ span: 24 }} xl={{ span: 14 }} xxl={{ span: 15 }}>
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
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 24 }}>
              <Row align="middle" className="cardbox" gutter={[20, 20]}>
                <Col xs={{ span: 24 }} xl={{ span: 9 }} xxl={{ span: 9 }}>
                  <img
                    onClick={() => setModal3(true)}
                    style={{ width: "100%" }}
                    src="/images/activities/image 1.jpg"
                    alt="activities"
                  />
                  <div className="eye-icon" onClick={() => setModal1(true)}>
                    <IoEye className="eye" />
                  </div>
                  <Modal
                    title="TITLE3"
                    centered
                    visible={modal3}
                    onCancel={() => setModal3(false)}
                    width={1000}
                    footer=""
                  >
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                      natus ullam aut ab libero harum. Temporibus, reprehenderit? Non
                      quo corporis enim quisquam architecto quasi alias pariatur,
                      tempore veritatis repellat eos.
                    </p>
                  </Modal>
                </Col>
                <Col xs={{ span: 24 }} xl={{ span: 14 }} xxl={{ span: 15 }}>
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
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Activities
