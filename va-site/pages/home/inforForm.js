import React, { useState } from "react";
import {
  Divider,
  Row,
  Col,
  Button,
  Input,
  Form,
  Checkbox,
  Select,
  Radio,
  message,
} from "antd";
import { DONATE_TREES } from "../../graphql/mutaion";
import { GET_DONATIONS, GET_MOST_DONATIONS } from "../../graphql/query";
import { useQuery, useMutation } from "@apollo/client";

function InfoForm() {
  const [current, setCurrent] = useState(0);
  const [donation] = useMutation(DONATE_TREES);
  const { refetch } = useQuery(GET_DONATIONS);
  const [loading, setLoading] = useState(false);
  const { refetch: refetchMostDonation } = useQuery(GET_MOST_DONATIONS);

  const [form] = Form.useForm();
  const next = (e) => {
    e.preventDefault();
    setCurrent(current + 1);
  };

  //go to prev step in form
  const prev = (e) => {
    e.preventDefault();
    setCurrent(current - 1);
  };

  //form
  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const tailLayout = {
    wrapperCol: {
      span: 24,
    },
  };
  const onFinish = (values) => {
    const { tree } = values;
    donation({
      variables: {
        ...values,
        // user_message: user_message === undefined ? "" : user_message,
        // phone: phone === undefined ? "No" : phone,
        tree: parseInt(tree),
      },
    }).then(async (res) => {
      setLoading(true);
      message.success("Donation Successful");
      await refetch();
      await refetchMostDonation();
      form.resetFields();
      setLoading(false);
    });
    // console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  //form steps

  const Step1Form = () => {
    return (
      <React.Fragment>
        <center>
          <h2 className="top-title">JOIN VitaminAir</h2>
          <p className="join-desc">
            To plant trees and Educate the next generation.
            {/* <div className="noted">*Note: 1 tree = 4,000 riel</div> */}
            <div className="noted">$1 for a tree</div>
          </p>
        </center>
        <Row gutter={[12, 12]}>
          <Col span={12}>
            {/* <Button
                  onChange={(e) => setValue(e.target.value)}
                  className="tree-amount"
                  onClick={amountActive}
                >
                  10,000 riel
                </Button> */}
            <Form.Item name="tree">
              <Radio.Group>
                <Radio.Button className="radio-button" value={5}>
                  <span className="text-radio-button">5 trees</span>
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            {/* <Button className="tree-amount amount-active" onClick={amountActive}>
                20,000 riel
              </Button> */}
            <Form.Item name="tree" initialValue={20}>
              <Radio.Group>
                <Radio.Button className="radio-button" value={20}>
                  <span className="text-radio-button ">20 trees</span>
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            {/* <Button className="tree-amount" onClick={amountActive}>
                30,000 riel
              </Button> */}
            <Form.Item name="tree">
              <Radio.Group>
                <Radio.Button className="radio-button" value={50}>
                  <span className="text-radio-button ">50 trees</span>
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            {/* <Button className="tree-amount" onClick={amountActive}>
                40,000 riel
              </Button> */}
            <Form.Item name="tree">
              <Radio.Group>
                <Radio.Button className="radio-button" value={100}>
                  <span className="text-radio-button ">100 trees</span>
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name="tree" label="Other Amount" initialValue={20}>
          <Input
            rules={[
              { required: true, message: "Please Select or Input Amount" },
            ]}
            className="input-amount"
            id="tree-amount"
            type="number"
            placeholder="Other Amount"
          />
        </Form.Item>
        <Divider />
      </React.Fragment>
    );
  };
  const Step2Form = () => {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Information</h2>

        <Form.Item
          className="details-input"
          label="Display Name"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="details-input"
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="details-input" label="Phone Number" name="phone">
          <Input />
        </Form.Item>

        <Form.Item
          className="details-input"
          label="Team"
          name="team"
          rules={[{ required: true, message: "Please input your team!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="details-input"
          label="Message"
          name="user_message"
          // rules={[{ required: true, message: "Please input your message!" }]}
        >
          <Input.TextArea />
          <div>Your message will display on the web publicly.</div>
        </Form.Item>

        <Form.Item
          className="details-input"
          label="Select"
          name="selectType"
          rules={[{ required: true, message: "Please selecet one!" }]}
        >
          <Select>
            <Select.Option value="Plant trees & Forest Patrolling">
              Plant trees & Forest Patrolling{" "}
            </Select.Option>
            <Select.Option value="School & Community Development">
              School & Community Development
            </Select.Option>
            {/* <Select.Option value="Other">Other</Select.Option> */}
          </Select>
        </Form.Item>
        <Form.Item
          className="details-input"
          {...tailLayout}
          name="public"
          valuePropName="checked"
        >
          <Checkbox>
            {" "}
            <span style={{ color: "#0cb04a" }}> YES!</span> I want periodic
            updates on{" "}
            <a
              style={{ color: "rgb(5, 118, 48)" }}
              href="https://t.me/vitaminair"
            >
              @VitaminAir
            </a>
          </Checkbox>
        </Form.Item>
        <Form.Item
          className="details-input"
          {...tailLayout}
          name="anonymous"
          valuePropName="checked"
        >
          <Checkbox>Please keep my donation anonymous </Checkbox>
        </Form.Item>
      </div>
    );
  };
  const steps = [
    {
      step: 1,
      title: "First",
      content: <Step1Form />,
    },
    {
      step: 2,
      title: "Second",
      content: <Step2Form />,
    },
  ];
  return (
    // <Step1Form>
    <div className="center container">
      <div id="form" className="form">
        <Form
          form={form}
          style={{ textAlign: "left" }}
          {...layout}
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {steps.map((item, index) => (
            <div
              key={index}
              className={`steps-content ${
                item.step !== current + 1 && "hidden"
              }`}
            >
              {item.content}
            </div>
          ))}
          <div className="steps-action">
            {current < steps.length - 1 && (
              <div className="btn-position">
                <Button
                  htmlType="submit"
                  onClick={next}
                  type="primary"
                  className="next-btn"
                >
                  Next
                </Button>
              </div>
            )}
            {current === steps.length - 1 && (
              <Form.Item {...tailLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                  className="next-btn"
                >
                  {loading ? <small>loading...</small> : <small>SUMBIT</small>}
                </Button>
              </Form.Item>
            )}
            {current > 0 && (
              <Button className="prev" onClick={prev}>
                Previous
              </Button>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
}

export default InfoForm;
// import React from "react";

// const inforForm = () => {
//   return <div>hello</div>;
// };

// export default inforForm;
