import { useState } from "react"
import { Row, Col, Modal, Spin } from "antd"
import { IoEye } from "react-icons/io5"
import { useQuery } from "@apollo/client"
import { GET_INITATIONS } from "../../graphql/query"

function Activities() {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const { loading, data, error, refetch } = useQuery(GET_INITATIONS)
  if (loading) return null
  return (
    <div>
      <h1>OUR INITIATION</h1>

      <div className="container activities">
        <div className="card">
          <Row>
            {data.get_initations.map((res) => {
              return (
                <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 24 }}>
                  <Row align="middle" className="cardbox" gutter={[20, 20]}>
                    <Col xs={{ span: 24 }} xl={{ span: 9 }} xxl={{ span: 9 }}>
                      <img
                        style={{ width: "100%" }}
                        src={"http://localhost:3600/public/uploads/" + res.image}
                        alt="activities"
                      />
                      <div className="eye-icon" onClick={() => setModal1(true)}>
                        <IoEye className="eye" />
                      </div>
                    </Col>
                    <Modal
                      title={res.title}
                      centered
                      visible={modal1}
                      // onOk={() => setVisible(false)}
                      onCancel={() => setModal1(false)}
                      width={1000}
                      footer=""
                    >
                      <p>{res.des}</p>
                    </Modal>
                    <Col xs={{ span: 24 }} xl={{ span: 14 }} xxl={{ span: 15 }}>
                      <h3>{res.title}</h3>
                      <p style={{ margin: "15px 0" }}>{res.des}</p>
                    </Col>
                  </Row>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Activities
