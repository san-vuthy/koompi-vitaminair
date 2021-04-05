import React, { useState } from "react"
import { Row, Col, Modal, Carousel } from "antd"
import { useQuery } from "@apollo/client"
import { GET_PROJECTS, GET_PROJECT } from "../graphql/query"
import Output from "editorjs-react-renderer"
import Footer from "./Footer"

function Project() {
  const [id, setId] = useState("")
  const [titles, setTitle] = useState("")
  const [ddes, setDes] = useState(JSON.stringify(""))
  const [modal1, setModal1] = useState(false)
  const { loading, data } = useQuery(GET_PROJECTS)
  const { loading: loadingProject, data: dataProject } = useQuery(GET_PROJECT, {
    variables: { id },
  })
  if (loading || loadingProject) return null
  const contentStyle = {
    height: "573px",
    color: "#fff",
    lineHeight: "500px",
    textAlign: "center",
    background: "#057630",
  }
  return (
    <div>
      <Carousel autoplay infinite autoplaySpeed={2000}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>

      <div className="container">
        <h1>PROJECTS</h1>

        <Row className="projects" justify="center">
          {data.get_projects.map((res) => {
            const { id, title, des } = res
            const result = <Output data={JSON.parse(res.des)} />
            return (
              <Col
                style={{ cursor: "pointer" }}
                onClick={async () => {
                  setModal1(true)
                  setTitle(title)
                  setId(id)
                  setDes(des)
                }}
                xs={{ span: 24 }}
                lg={{ span: 11 }}
                className="project-list"
              >
                {/* <img src={"http://localhost:3500/public/uploads/" + res.image} /> */}
                <img
                  src={"https://backend.vitaminair.org/public/uploads/" + res.image}
                  alt="img"
                />
                <div className="info">
                  <h3>{res.title}</h3>
                  <p>
                    {/* {`${
                      result.props.data.blocks[0].data.text.length < 10
                        ? result.props.data.blocks[0].data.text
                        : result.props.data.blocks[0].data.text.substring(0, 10) +
                          "..."
                    }`} */}
                    {`${result.props.data.blocks[0].data.text.substring(0, 80)}...`}
                  </p>
                </div>
              </Col>
            )
          })}
        </Row>
        <Modal
          title={titles}
          centered
          visible={modal1}
          // onOk={() => setVisible(false)}
          onCancel={() => setModal1(false)}
          width={1000}
          footer=""
        >
          <Output data={JSON.parse(ddes)} />
        </Modal>
      </div>
      <Footer />
    </div>
  )
}

export default Project
