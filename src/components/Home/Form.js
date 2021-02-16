import React, { useState } from "react"
import { message, Divider, Row, Col, Button, Input } from "antd"

function Form() {
  const [current, setCurrent] = useState(0)
  // const [tree, setTree] = useState(0);
  //go to next step in form
  const next = (e) => {
    e.preventDefault()
    setCurrent(current + 1)
    // let amount = document.getElementById("tree-amount").value;

    // if (amount === "") {
    //   let btnTree = document.getElementsByClassName("amount-active")[0]
    //     .innerHTML;
    //   // let amount; //tree amount from btn
    //   if (btnTree === "5 Trees") amount = 5;
    //   else if (btnTree === "20 Trees") amount = 20;
    //   else if (btnTree === "50 Trees") amount = 50;
    //   else if (btnTree === "100 Trees") amount = 100;

    //   setTree(amount);
    // } else {
    //   setTree(amount);
    // }
  }

  //go to prev step in form
  const prev = (e) => {
    e.preventDefault()
    setCurrent(current - 1)
  }
  //form done
  const done = (e) => {
    e.preventDefault()
    message.success("Processing complete!")
  }
  //active amount of trees button
  const amountActive = (e) => {
    e.preventDefault()

    const btns = Array.from(document.getElementsByClassName("tree-amount"))
    btns.forEach((btn) => {
      if (btn === e.target) {
        btn.className += " amount-active"
      } else btn.className = "tree-amount"
    })
  }

  //form steps
  const steps = [
    {
      title: "First",
      content: (
        <>
          <h2>JOIN VitaminAir</h2>
          <p className="join-desc">$1 plants a tree</p>
          <Row gutter={[12, 12]}>
            <Col span={12}>
              <Button className="tree-amount" onClick={amountActive}>
                10,000 riel
              </Button>
            </Col>
            <Col span={12}>
              <Button className="tree-amount" onClick={amountActive}>
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
            className="tree-amount"
            id="tree-amount"
            type="text"
            placeholder="Other Amount"
          />

          <Divider />
        </>
      ),
    },
    {
      title: "Second",
      content: (
        <>
          <h2>Detail</h2>
          <div className="input-fill">
            <p htmlFor="name">DISPLAY NAME</p>
            <input type="text" placeholder="Display name" />
          </div>
          <div className="input-fill">
            <p htmlFor="name">EMAIL ADDRESS</p>
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-fill">
            <p htmlFor="name">MOBILE PHONE</p>
            <input type="text" placeholder="Mobile Phone" />
            <p>
              optional; by entering a phone number, you consent to receive text
              messages
            </p>
          </div>
          <div className="input-fill">
            {" "}
            <p htmlFor="name">TEAM</p>
            <input type="text" placeholder="Team" />
            <p>optional</p>
          </div>
          <div className="input-fill">
            {" "}
            <p htmlFor="name">MESSAGE</p>
            <textarea type="text" placeholder="My message is..." />
            <p>optional;for display on the website</p>
          </div>
          <div className="confirm-check">
            <input type="checkbox" />
            <label htmlFor="confirmation">
              {" "}
              <span style={{ color: "#0cb04a", fontWeight: "bold" }}>YES!</span> I
              want periodic updates on VitaminAir{" "}
            </label>
          </div>
          <div className="confirm-check">
            <input type="checkbox" />
            <label htmlFor="confirmation"> Please keep my donation anonymous </label>
          </div>
        </>
      ),
    },
  ]
  return (
    <>
      <div className="center">
        <form id="form" className="form" onSubmit={next}>
          {steps[current].content}
          {current < steps.length - 1 && (
            <div className="btn-position">
              <Button type="primary" className="next-btn">
                Next
              </Button>
            </div>
          )}
          {current === steps.length - 1 && (
            <button className="next" onClick={done}>
              Done
            </button>
          )}
          {current > 0 && (
            <button className="prev" style={{ margin: "0 8px" }} onClick={prev}>
              Previous
            </button>
          )}
        </form>
      </div>
    </>
  )
}

export default Form
