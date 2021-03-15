import React, { useState } from "react";
import { Layout, Form, Button, Input, message } from "antd";
import TopNavbar from "../../Layouts/topNavbar";
import LeftNavbar from "../../Layouts/leftNavbar";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_ABOUT } from "../../../graphql/mutation";
import { GET_ABOUTS } from "../../../graphql/query";

import FooterDashboard from "../../Layouts/footer";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../Layouts/tool";

const { Content } = Layout;
const AddAbout = () => {
  const instanceRef = React.useRef(null);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [add_about] = useMutation(ADD_ABOUT);
  const { refetch } = useQuery(GET_ABOUTS);
  // const handleDescChange = (value) => {
  //   console.log(value);
  //   setDesc(value);
  // };
  const [data, setData] = React.useState({
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
  async function handleSave() {
    const savedData = await instanceRef.current.save();
    console.log(JSON.stringify(savedData));
    await setData(savedData);
    // instanceRef.current.clear();
  }
  const onFinish = (values) => {
    const { title } = values;
    add_about({
      variables: {
        des: JSON.stringify(data),
        title: title,
      },
    }).then(async (res) => {
      setLoading(true);

      await message.success("Successfull");
      form.resetFields();

      await refetch();
      setLoading(false);
    });
    console.log(values);
  };
  return (
    <React.Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <TopNavbar />
          <Content style={{ backgroundColor: "#fff" }}>
            <div className="contenContainer">
              <h1 className="title-top">Add About</h1>
              {/* <Output data={data} /> */}
              <Form
                form={form}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                layout="vertical"
              >
                <Form.Item
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
                    tools={EDITOR_JS_TOOLS}
                    placeholder="Please input Description"
                    instanceRef={(instance) => (instanceRef.current = instance)}
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
              </Form>
            </div>
          </Content>
          <FooterDashboard />
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default AddAbout;
