import { Row, Col } from "antd"
import { Carousel } from "antd"
import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../graphql/query"
function Project() {
  const { loading, data, error, refetch } = useQuery(GET_PROJECTS)
  if (loading) return null
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
        <p style={{ textAlign: "center" }}>
          We're especially pleased to have built strategic partnerships with forward
          thinking leaders in the business world.
        </p>
        <Row className="projects" justify="center">
          {data.get_projects.map((res) => {
            return (
              <Col xs={{ span: 24 }} lg={{ span: 11 }} className="project-list">
                <img src={"http://localhost:3500/public/uploads/" + res.image} />
                <div className="info">
                  <h3>{res.title}</h3>
                  <p>{res.des}</p>
                </div>
              </Col>
            )
          })}
          {/* <Col xs={{ span: 24 }} lg={{ span: 11 }} className="project-list">
            <img src="/images/projects/va-ecotour.png" alt="" />
            <div className="info">
              <h3>ECO-TOURISM</h3>
              <p>
                Bring everyone closer to nature, instilling love, healthy and
                sustainable relationships among people.
              </p>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 11 }} className="project-list">
            <img src="/images/projects/va-water.png" alt="" />
            <div className="info">
              <h3>VITAMINWATER</h3>
              <p>
                Capture purified water from air, building water and irrigation
                systems for abundance and prosperity.
              </p>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 11 }} className="project-list">
            <img src="/images/projects/va-seedbombing.png" alt="" />
            <div className="info">
              <h3>SEED BOMBING</h3>
              <p>
                Combine tradition with ecological science and technology for enhanced
                productivity.
              </p>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 11 }} className="project-list">
            <img src="/images/projects/va-reforestation.png" alt="" />
            <div className="info">
              <h3>REFORESTATION</h3>
              <p>
                Reforest and maintain at least 60% of Cambodian national forest
                cover.
              </p>
            </div>
          </Col> */}
        </Row>
      </div>
    </div>
  )
}

export default Project
