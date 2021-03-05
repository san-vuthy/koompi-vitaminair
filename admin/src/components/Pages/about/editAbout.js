import React, { useState } from "react";
import { Col, Row, Layout, Form, Button, Input, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import TopNavbar from "../../Layouts/topNavbar";
import LeftNavbar from "../../Layouts/leftNavbar";
import { useMutation, useQuery } from "@apollo/client";
import { EDIT_ABOUT } from "../../../graphql/mutation";
import { GET_ABOUT } from "../../../graphql/query";
import { useParams } from "react-router-dom";
import FooterDashboard from "../../Layouts/footer";

const { Content, Footer } = Layout;
const EditAbout = ({ history }) => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [edit_about] = useMutation(EDIT_ABOUT);
  const { loading: loadingAbout, error, data, refetch } = useQuery(GET_ABOUT, {
    variables: { id },
  });

  const onFinish = (values) => {
    edit_about({
      variables: {
        ...values,
        id: id,
      },
    }).then(async (res) => {
      setLoading(true);
      await message.success("Successfull");
      await refetch();
      await history.push("/admin/abouts");
    });
    console.log(values);
  };
  if (loadingAbout) {
    return "loading.....";
  }
  return (
    <React.Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <TopNavbar />
          <Content style={{ backgroundColor: "#fff" }}>
            <div className="contenContainer">
              <h1 className="title-top">Edit About</h1>
              <Form
                form={form}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                layout="vertical"
              >
                <Form.Item
                  initialValue={data.get_about.title}
                  label="Title"
                  name="title"
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
                  initialValue={data.get_about.des}
                  label="Description"
                  name="des"
                  rules={[
                    {
                      required: true,
                      message: "Please input Desciption!",
                    },
                  ]}
                >
                  <Input.TextArea className="input-style" size="large" />
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
              </Form>
            </div>
          </Content>
          <FooterDashboard />
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default EditAbout;
