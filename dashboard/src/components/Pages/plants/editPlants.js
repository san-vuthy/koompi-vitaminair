import React, { useState } from "react";
import {
  Col,
  Row,
  Layout,
  Form,
  Button,
  Input,
  Upload,
  message,
  Spin,
} from "antd";

import TopNavbar from "../../Layouts/topNavbar";
import LeftNavbar from "../../Layouts/leftNavbar";
import { useMutation, useQuery } from "@apollo/client";
import { EDIT_PLANTS } from "../../../graphql/mutation";
import { GET_A_PLANTS } from "../../../graphql/query";
import { useParams } from "react-router-dom";
import { EDITOR_JS_TOOLS } from "../../Layouts/tool";
import EditorJs from "react-editor-js";

const { Content } = Layout;
const EditPlants = ({ history }) => {
  const instanceRef = React.useRef(null);
  const [datas, setData] = React.useState({
    time: 1556098174501,
    blocks: [
      {
        type: "header",
        data: {
          text: "Editor.js",
          level: 2,
        },
      },
    ],
  });
  const { id } = useParams();
  const [form] = Form.useForm();
  const [state, setState] = useState({
    imageUrl: null,
    loading: false,
  });
  const [loading] = useState(false);
  const {
    loading: plantsLoading,
    data: plantsData,
    refetch: plantsRefetch,
  } = useQuery(GET_A_PLANTS, {
    variables: { id },
  });
  const [edit_plants] = useMutation(EDIT_PLANTS);

  async function handleSave() {
    const savedData = await instanceRef.current.save();
    console.log(JSON.stringify(savedData));
    await setData(savedData);
    // instanceRef.current.clear();
  }

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      setState({
        imageUrl: info.file.response.data,
        loading: false,
      });
    }
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  const onFinish = (values) => {
    const { name, sciname, family } = values;
    edit_plants({
      variables: {
        name: name,
        sciname: sciname,
        family: family,
        des: JSON.stringify(datas),
        image:
          state.imageUrl === null
            ? plantsData.get_a_plants.image
            : state.imageUrl,
        id: id,
      },
    }).then(async (res) => {
      await plantsRefetch();
      await message.success("Successfull");
      await history.push("/admin/plants");
    });
    console.log(values);
  };
  if (plantsLoading) {
    return (
      <center style={{ marginTop: "100px" }}>
        <Spin style={{ color: "red !important" }} size="large" />
      </center>
    );
  }
  return (
    <React.Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <TopNavbar />
          <Content style={{ backgroundColor: "#fff" }}>
            <div className="contenContainer">
              <h1 className="title-top">Edit Plants</h1>
              <Form
                form={form}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                layout="vertical"
              >
                <Row gutter={[32, 0]}>
                  <Col span={16}>
                    <Form.Item
                      initialValue={plantsData.get_a_plants.name}
                      label="Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input Title!",
                        },
                      ]}
                    >
                      <Input className="input-style" size="large" />
                    </Form.Item>
                    <Form.Item
                      initialValue={plantsData.get_a_plants.sciname}
                      label="Scientific name"
                      name="sciname"
                      rules={[
                        {
                          required: true,
                          message: "Please input Scientific Name!",
                        },
                      ]}
                    >
                      <Input className="input-style" size="large" />
                    </Form.Item>
                    <Form.Item
                      initialValue={plantsData.get_a_plants.family}
                      label="family"
                      name="family"
                      rules={[
                        {
                          required: true,
                          message: "Please input family!",
                        },
                      ]}
                    >
                      <Input className="input-style" size="large" />
                    </Form.Item>
                    <Form.Item
                      initialValue={JSON.parse(plantsData.get_a_plants.des)}
                      label="Description"
                      name="des"
                      rules={[
                        {
                          required: true,
                          message: "Please input Desciption!",
                        },
                      ]}
                    >
                      {/* <Input.TextArea className="input-style" size="large" /> */}
                      <EditorJs
                        data={JSON.parse(plantsData.get_a_plants.des)}
                        tools={EDITOR_JS_TOOLS}
                        instanceRef={(instance) =>
                          (instanceRef.current = instance)
                        }
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        onClick={handleSave}
                        className="submit-button"
                        // type="primary"
                        htmlType="submit"
                        size="large"
                        // className="standard-btn"
                      >
                        {loading ? (
                          <small>loading...</small>
                        ) : (
                          <small>SUMBIT</small>
                        )}
                      </Button>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item>
                      <React.Fragment>
                        <Form.Item
                          label="Image"
                          initialValue={plantsData.get_a_plants.image}
                          name="image"
                        >
                          <Upload.Dragger
                            name="file"
                            // listType="picture-card"
                            className="avatar-uploader"
                            // showUploadList={false}
                            action="https://backend.vitaminair.org/upload/images"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                          >
                            {state.imageUrl === null ? (
                              // <img
                              //   src={`${`http://localhost:3500`}/public/uploads/${
                              //     blogData.get_initation.image
                              //   }`}
                              //   alt="avatar"
                              //   style={{ width: "100%" }}
                              // />
                              <img
                                // src={`${`https://backend.vitaminair.org/`}/public/uploads/${
                                //   state.imageUrl
                                // }`}
                                src={
                                  "https://backend.vitaminair.org/public/uploads/" +
                                  plantsData.get_a_plants.image
                                }
                                alt="avatar"
                                style={{ width: "100%" }}
                              />
                            ) : (
                              // <img
                              //   src={`${`http://localhost:3500`}/public/uploads/${
                              //     state.imageUrl
                              //   }`}
                              //   alt="avatar"
                              //   style={{ width: "100%" }}
                              // />
                              <img
                                // src={`${`https://backend.vitaminair.org/`}/public/uploads/${
                                //   state.imageUrl
                                // }`}
                                src={
                                  "https://backend.vitaminair.org/public/uploads/" +
                                  state.imageUrl
                                }
                                alt="avatar"
                                style={{ width: "100%" }}
                              />
                            )}
                          </Upload.Dragger>
                        </Form.Item>
                      </React.Fragment>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default EditPlants;
