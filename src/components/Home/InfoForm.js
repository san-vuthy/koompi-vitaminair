import React, { useState } from "react"
import { Divider, Row, Col, Button, Input, Form, Checkbox, Select } from "antd"
// import Layout from "antd/lib/layout/layout"

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
  //form done
  // const done = (e) => {
  //   e.preventDefault()
  //   message.success("Processing complete!")
  // }
  //active amount of trees button
  const amountActive = (e) => {
    e.preventDefault()
    // console.log(e.target.parentElement)
    const btns = Array.from(document.getElementsByClassName("tree-amount"))
    btns.forEach((btn) => {
      if (btn === e.target) {
        btn.className += " amount-active"
      } else if (e.target.parentElement.className === "tree-amount") {
        e.target.parentElement.className += " amount-active"
      } else btn.className = "tree-amount"
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
  const steps = [
    {
      title: "First",
      content: (
        <div>
          <h2>JOIN VitaminAir</h2>
          <p className="join-desc">$1 plants a tree</p>
          <Row gutter={[12, 12]}>
            <Col span={12}>
              <Button className="tree-amount" onClick={amountActive}>
                10,000 riel
              </Button>
            </Col>
            <Col span={12}>
              <Button className="tree-amount amount-active" onClick={amountActive}>
                20,000 riel
              </Button>
            </Col>
            <Col span={12}>
              <Button className="tree-amount" onClick={amountActive}>
                30,000 riel
              </Button>
            </Col>
            <Col span={12}>
              <Button className="tree-amount" onClick={amountActive}>
                40,000 riel
              </Button>
            </Col>
          </Row>
          <Input
            onClick={amountActive}
            className="tree-amount"
            id="tree-amount"
            type="text"
            placeholder="Other Amount"
          />
          <Divider />
        </div>
      ),
    },
    {
      title: "Second",
      content: (
        <>
          <h2>Detail</h2>
          <Form
            style={{ textAlign: "left" }}
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
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
              rules={[{ type: "number" }]}
            >
              <Input />

              <p>
                optional; by entering a phone number, you consent to receive text
                messages
              </p>
            </Form.Item>
            <Form.Item label="TEAM" name="team">
              <Input />
              <p>optional</p>
            </Form.Item>
            <Form.Item label="MESSAGE" name="message">
              <Input.TextArea />
              <p>optional; for display on the website</p>
            </Form.Item>
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
                <span style={{ color: "#0cb04a" }}> YES!</span> I want periodic
                updates on #TeamTrees{" "}
              </Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout} name="anonymous" valuePropName="checked">
              <Checkbox>Please keep my donation anonymous </Checkbox>
            </Form.Item>
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
          </Form>
        </>
      ),
    },
  ]
  return (
    <>
      <div className="center container">
        <div id="form" className="form">
          {steps[current].content}
          {current < steps.length - 1 && (
            <div className="btn-position">
              <Button onClick={next} type="primary" className="next-btn">
                Next
              </Button>
            </div>
          )}
          {/* {current === steps.length - 1 && (
            <Button onClick={done} type="primary" className="next-btn">
              Done
            </Button>
          )} */}
          {current > 0 && (
            <Button className="prev" onClick={prev}>
              Previous
            </Button>
          )}
        </div>
      </div>
    </>
  )
}

export default InfoForm
