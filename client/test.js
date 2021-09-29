<div className="card">
          <Row>
            {data.get_initations.map((res, index) => {
              const { id, title, des, image } = res;
              const result = <Output data={JSON.parse(res.des)} />;
              // console.log(result.props.data.blocks[0].data.text.length)
              return (
                <div
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
                        "https://backend.vitaminair.org/public/uploads/" +
                        images
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
                    gutter={[32, 32]}
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
                  {/* </div> */}
                </div>
              );
            })}
          </Row>
        </div>