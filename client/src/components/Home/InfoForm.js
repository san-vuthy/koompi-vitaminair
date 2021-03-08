import React, { useState } from "react"
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
} from "antd"
import { DONATE_TREES } from "../../graphql/mutaion"
import { GET_DONATIONS, GET_MOST_DONATIONS } from "../../graphql/query"
import { useQuery, useMutation } from "@apollo/client"

function InfoForm() {
  const [current, setCurrent] = useState(0)
  const [donation] = useMutation(DONATE_TREES)
  const { refetch } = useQuery(GET_DONATIONS)
  const { refetch: refetchMostDonation } = useQuery(GET_MOST_DONATIONS)

  const [form] = Form.useForm()
  const next = (e) => {
    e.preventDefault()
    setCurrent(current + 1)
  }

  //go to prev step in form
  const prev = (e) => {
    e.preventDefault()
    setCurrent(current - 1)
  }

  // const amountActive = (e) => {
  //   e.preventDefault()
  //   // console.log(e.target.parentElement)
  //   const btns = Array.from(document.getElementsByClassName("tree-amount"))
  //   console.log(btns)
  //   console.log(e.target)
  //   btns.forEach((btn) => {
  //     if (btn === e.target) {
  //       btn.className += " amount-active"
  //     } else if (btn === e.target.parentElement) {
  //       btn.className += " amount-active"
  //     } else {
  //       btn.className = "tree-amount"
  //     }
  //   })
  // }
  //form
  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  }
  const tailLayout = {
    wrapperCol: {
      span: 24,
    },
  }
  const onFinish = (values) => {
    const { tree } = values
    donation({
      variables: {
        ...values,
        tree: parseInt(tree),
      },
    }).then(async (res) => {
      message.success(" Donation Successful")
      await refetch()
      await refetchMostDonation()
      form.resetFields()
    })
    console.log(values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }
  //form steps

  const Step1Form = () => {
    return (
      <>
        <div>
          <center>
            <h2 className="top-title">JOIN VitaminAir</h2>
            <p className="join-desc">
              to Plant trees and Educate the next generation
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
                <Radio.Group defaultValue={20}>
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
              rules={[{ required: true, message: "Please Select or Input Amount" }]}
              className="input-amount"
              id="tree-amount"
              type="number"
              placeholder="Other Amount"
            />
          </Form.Item>
          <Divider />
        </div>
      </>
    )
  }
  const Step2Form = () => {
    return (
      <>
        <h2 style={{ textAlign: "center" }}>Detail</h2>

        <Form.Item
          className="details-input"
          label="DISPLAY NAME"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="details-input"
          label="EMAIL ADDRESS"
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
        <Form.Item
          className="details-input"
          label="MOBILE PHONE"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your Phone Number!",
            },
          ]}
          // rules={[{ type: "number" }]}
        >
          <Input />
        </Form.Item>
        <p>
          optional; by entering a phone number, you consent to receive text messages
        </p>

        <Form.Item
          className="details-input"
          label="TEAM"
          name="team"
          rules={[{ required: true, message: "Please input your team!" }]}
        >
          <Input />
        </Form.Item>
        <p>optional</p>

        <Form.Item
          className="details-input"
          label="MESSAGE"
          name="user_message"
          rules={[{ required: true, message: "Please input your message!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <p>optional; for display on the website</p>

        <Form.Item
          className="details-input"
          label="Select"
          name="selectType"
          rules={[{ required: true, message: "Please selecet one!" }]}
        >
          <Select>
            <Select.Option value="Tree">Tree</Select.Option>
            <Select.Option value="School">School</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
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
            <span style={{ color: "#0cb04a" }}> YES!</span> I want periodic updates
            on #TeamTrees{" "}
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
      </>
    )
  }
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
  ]
  return (
    // <Step1Form>
    <div className="center container">
      <div id="form" className="form">
        <Form
          form={form}
          style={{ textAlign: "left" }}
          {...layout}
          name="basic"
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {steps.map((item) => (
            <div
              className={`steps-content ${item.step !== current + 1 && "hidden"}`}
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
                  Submit
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
  )
}

export default InfoForm
