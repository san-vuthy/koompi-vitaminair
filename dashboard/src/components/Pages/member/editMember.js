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
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import TopNavbar from "../../Layouts/topNavbar";
import LeftNavbar from "../../Layouts/leftNavbar";
import { useMutation, useQuery } from "@apollo/client";
import { EDIT_MEMBER } from "../../../graphql/mutation";
import { GET_MEMBER } from "../../../graphql/query";
import addFile from "../../../assets/undraw_Add_files_re_v09g.png";
import { useParams } from "react-router-dom";
import FooterDashboard from "../../Layouts/footer";

const { Content, Footer } = Layout;
const EditMember = ({ history }) => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [state, setState] = useState({
    imageUrl: null,
    loading: false,
  });
  const [loading, setLoading] = useState(false);
  const [edit_member] = useMutation(EDIT_MEMBER);
  const { loading: loadingMember, error, data, refetch } = useQuery(
    GET_MEMBER,
    {
      variables: { id },
    }
  );
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
  const uploadButton = (
    <div>
      {/* {state.loading ? <LoadingOutlined /> : <PlusOutlined />} */}
      <div className="ant-upload-text">
        <img style={{ maxWidth: "100%" }} src={addFile} />
      </div>
    </div>
  );
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
    edit_member({
      variables: {
        ...values,
        image: state.imageUrl === null ? data.get_member.image : state.imageUrl,
        id: id,
      },
    }).then(async (res) => {
      setLoading(true);

      await message.success("Successfull");
      await refetch();
      await history.push("/admin/members");
    });
    console.log(values);
  };
  if (loadingMember) {
    return (
      <center style={{ marginTop: "100px" }}>
        <Spin style={{ color: "red !important" }} size="large" />
      </center>
    );
  }
  console.log("data", data);
  return (
    <React.Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <TopNavbar />
          <Content style={{ backgroundColor: "#fff" }}>
            <div className="contenContainer">
              <h1 className="title-top">Edit Member</h1>
              <Form
                form={form}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                layout="vertical"
              >
                <Row gutter={[32, 0]}>
                  <Col span={16}>
                    <Form.Item
                      initialValue={data.get_member.name}
                      label="Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input Name!",
                        },
                      ]}
                    >
                      <Input className="input-style" size="large" />
                    </Form.Item>
                    <Form.Item
                      initialValue={data.get_member.position}
                      label="Position"
                      name="position"
                      rules={[
                        {
                          required: true,
                          message: "Please input Position!",
                        },
                      ]}
                    >
                      <Input className="input-style" size="large" />
                    </Form.Item>
                    <Form.Item>
                      <Button
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
                          initialValue={data.get_member.image}
                          rules={[
                            {
                              required: true,
                              message: "Please input Image!",
                            },
                          ]}
                          label="Image"
                          name="image"
                        >
                          <Upload.Dragger
                            name="file"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="http://localhost:3500/upload/images"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                          >
                            {state.imageUrl === null ? (
                              <img
                                src={`${`http://localhost:3500`}/public/uploads/${
                                  data.get_member.image
                                }`}
                                alt="avatar"
                                style={{ width: "100%" }}
                              />
                            ) : (
                              <img
                                src={`${`http://localhost:3500`}/public/uploads/${
                                  state.imageUrl
                                }`}
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
          <FooterDashboard />
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default EditMember;
