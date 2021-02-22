import { Row, Col } from "antd"
import { Carousel } from "antd"
function Project() {
  const contentStyle = {
    height: "573px",
    color: "#fff",
    lineHeight: "500px",
    textAlign: "center",
    background: "#057630",
  }
  return (
    <div>
      <Carousel autoplay>
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
        <Row className="projects" gutter={30} justify="center">
          <Col xs={{ span: 24 }} lg={{ span: 11 }} className="project-list">
            <img src="/images/projects/va-natural-farming.png" alt="" />
            <div className="info">
              <h3>NATURAL FARMING</h3>
              <p>
                Designing balanced ecosystems that produce rich soils and
                nutrient-dense foods while respecting the environment and animals.
              </p>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 11 }} className="project-list">
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
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Project
