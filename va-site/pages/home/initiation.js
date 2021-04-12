import { useState } from "react";
import { Row, Col, Modal } from "antd";
import { IoEye } from "react-icons/io5";
import { useQuery } from "@apollo/client";
import { GET_INITATIONS, GET_INITATION } from "../../graphql/query";
import Output from "editorjs-react-renderer";
import Footer from "../../components/footer";

function Initiation() {
  const [id, setId] = useState("");
  const [titles, setTitle] = useState("");
  const [images, setImage] = useState("");
  const [ddes, setDes] = useState(JSON.stringify(""));
  const [modal1, setModal1] = useState(false);
  const { loading, data } = useQuery(GET_INITATIONS);
  // const { laoding: initationLaoding } = useQuery(GET_INITATION, {
  //   variables: { id },
  // });
  if (loading) return null;

  return (
    <div>
      <div className="container">
        <h1>OUR INITIATION</h1>
        <p className="init-sub-desc">
          To take actions and show to people that we can work with nature and
          not against her, we bought 110 hectares of land in Kompong Seila
          surrounded by mountains and national forest, and started building the
          team to put our project development plan to work.
        </p>
      </div>

      <div className="container activities">
        {/* <div className="card"> */}
        <Row>
          {data.get_initations.map((res, index) => {
            const { id, title, des, image } = res;
            const result = <Output data={JSON.parse(res.des)} />;
            return (
              <div
                className="cards"
                // key={index}
                // xs={{ span: 24 }}
                // md={{ span: 12 }}
                // xl={{ span: 24 }}
              >
                <Modal
                  // title={titles}
                  // centered
                  visible={modal1}
                  // onOk={() => setVisible(false)}
                  onCancel={() => setModal1(false)}
                  width={750}
                  style={{ top: 30 }}
                  footer={null}
                >
                  <img
                    className="image-init"
                    src={
                      "https://backend.vitaminair.org/public/uploads/" + images
                    }
                  />
                  <div className="modal-init">
                    <h3 className="modals">{titles}</h3>
                    <Output data={JSON.parse(ddes)} />
                  </div>
                </Modal>
                {/* <div className="card-width"> */}
                <Row
                  style={{ cursor: "pointer" }}
                  onClick={async () => {
                    // shows()
                    setModal1(true);
                    setTitle(title);
                    setId(id);
                    setDes(des);
                    setImage(image);
                  }}
                  className="cardbox"
                  // gutter={[32, 32]}
                >
                  <Col xs={24} xl={8}>
                    <img
                      className="image-initaion"
                      style={{ width: "100%" }}
                      // src={"http://localhost:3500/public/uploads/" + res.image}
                      src={
                        "https://backend.vitaminair.org/public/uploads/" +
                        res.image
                      }
                      alt="activities"
                    />
                    {/* <div className="eye-icon">
                        <IoEye className="eye" />
                      </div> */}
                  </Col>

                  <Col xs={{ span: 24 }} xl={16}>
                    <div className="modal-init-text">
                      <h3>{res.title}</h3>
                      <p style={{ margin: "15px 0" }}>
                        {/* {`${
                          result.props.data.blocks[0].data.text.length <= 500
                            ? result.props.data.blocks[0].data.text
                            : result.props.data.blocks[0].data.text.substring(
                                0,
                                500
                              ) + "..."
                        }`} */}
                        {`${result.props.data.blocks[0].data.text.substring(
                          0,
                          800
                        )}...`}
                      </p>
                    </div>
                  </Col>
                  {/* </div> */}
                </Row>
              </div>
              // </div>
            );
          })}
        </Row>
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Initiation;
