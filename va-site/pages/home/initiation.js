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
  const [ddes, setDes] = useState(JSON.stringify(""));
  const [modal1, setModal1] = useState(false);
  const { loading, data } = useQuery(GET_INITATIONS);
  // const { laoding: initationLaoding } = useQuery(GET_INITATION, {
  //   variables: { id },
  // });
  if (loading) return null;

  return (
    <div>
      <h1>OUR INITIATION</h1>

      <div className="container activities">
        <div className="card">
          <Row>
            {data.get_initations.map((res, index) => {
              const { id, title, des } = res;
              const result = <Output data={JSON.parse(res.des)} />;
              // console.log(result.props.data.blocks[0].data.text.length)
              return (
                <Col
                  key={index}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  xl={{ span: 24 }}
                >
                  <Modal
                    // title={titles}
                    centered
                    visible={modal1}
                    // onOk={() => setVisible(false)}
                    onCancel={() => setModal1(false)}
                    width={650}
                    footer=""
                  >
                    <h3 className="modals">{title}</h3>
                    <Output data={JSON.parse(ddes)} />
                  </Modal>
                  <Row
                    style={{ cursor: "pointer" }}
                    onClick={async () => {
                      // shows()
                      setModal1(true);
                      setTitle(title);
                      setId(id);
                      setDes(des);
                    }}
                    align="middle"
                    className="cardbox"
                    gutter={[20, 20]}
                  >
                    <Col xs={{ span: 24 }} xl={{ span: 9 }} xxl={{ span: 9 }}>
                      <img
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

                    <Col xs={{ span: 24 }} xl={{ span: 14 }} xxl={{ span: 15 }}>
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
                          400
                        )}...`}
                      </p>
                    </Col>
                    {/* </div> */}
                  </Row>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Initiation;
