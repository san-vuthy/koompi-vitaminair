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
} from "antd"

function InfoForm() {
  const [current, setCurrent] = useState(0)
  const next = (e) => {
    e.preventDefault()
    setCurrent(current + 1)
  }

  //go to prev step in form
  const prev = (e) => {
    e.preventDefault()
    setCurrent(current - 1)
  }

  const amountActive = (e) => {
    e.preventDefault()
    // console.log(e.target.parentElement)
    const btns = Array.from(document.getElementsByClassName("tree-amount"))
    console.log(btns)
    console.log(e.target)
    btns.forEach((btn) => {
      if (btn === e.target) {
        btn.className += " amount-active"
      } else if (btn === e.target.parentElement) {
        btn.className += " amount-active"
      } else {
        btn.className = "tree-amount"
      }
    })
  }
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
    console.log("Success:", values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }
  //form steps

  const Step1Form = () => {
    return (
      <>
        <div>
          <h2>JOIN VitaminAir</h2>
          <p className="join-desc">$1 plants a tree</p>

          <Row gutter={[12]}>
            <Col span={12}>
              {/* <Button
                  onChange={(e) => setValue(e.target.value)}
                  className="tree-amount"
                  onClick={amountActive}
                >
                  10,000 riel
                </Button> */}
              <Form.Item name="amount">
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
              <Form.Item name="amount" initialValue={20}>
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
              <Form.Item name="amount">
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
              <Form.Item name="amount">
                <Radio.Group>
                  <Radio.Button className="radio-button" value={100}>
                    <span className="text-radio-button ">100 trees</span>
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="amount" initialValue={20} label="Other Amount">
            <Input
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
        <h2>Detail</h2>
        {/* <Form
          style={{ textAlign: "left" }}
          {...layout}
          name="basic"
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        > */}
        <Form.Item
          label="DISPLAY NAME"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="EMAIL ADDRESS"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="MOBILE PHONE"
          name="phone"
          // rules={[{ type: "number" }]}
        >
          <Input />
        </Form.Item>
        <p>
          optional; by entering a phone number, you consent to receive text messages
        </p>
        <Form.Item label="TEAM" name="team">
          <Input />
        </Form.Item>
        <p>optional</p>
        <Form.Item label="MESSAGE" name="message">
          <Input.TextArea />
        </Form.Item>
        <p>optional; for display on the website</p>
        <Form.Item label="Select" name="selecType">
          <Select>
            <Select.Option value="Tree">Tree</Select.Option>
            <Select.Option value="School">School</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout} name="public" valuePropName="checked">
          <Checkbox>
            {" "}
            <span style={{ color: "#0cb04a" }}> YES!</span> I want periodic updates
            on #TeamTrees{" "}
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout} name="anonymous" valuePropName="checked">
          <Checkbox>Please keep my donation anonymous </Checkbox>
        </Form.Item>
        {/* <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            className="next-btn"
          >
            Submit
          </Button>
        </Form.Item> */}
        {/* </Form> */}
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
              // <Button type="primary" onClick={() => next()}>
              //   Next
              // </Button>
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
              // <Button type="primary" htmlType="submit">
              //   Submit
              // </Button>
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
              // <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              //   Previous
              // </Button>
              <Button className="prev" onClick={prev}>
                Previous
              </Button>
            )}
          </div>
        </Form>
        {/* {steps[current].content}
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
          {current > 0 && (
            <Button className="prev" onClick={prev}>
              Previous
            </Button>
          )} */}
      </div>
    </div>
    // </Step1Form>
  )
}

export default InfoForm
