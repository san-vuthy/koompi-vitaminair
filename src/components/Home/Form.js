import React, { useState } from "react";
import { message, Divider } from "antd";

const steps = [
  {
    title: "First",
    content: (
      <>
        <h2>JOIN VitaminAir</h2>
        <p style={{ marginBottom: "40px" }}>$1 plants a tree</p>
        <button className="tree-amount"> 5 Trees</button>
        <button className="tree-amount">20 Trees</button>
        <br />
        <button className="tree-amount">50 Trees</button>
        <button className="tree-amount">100 Trees</button>
        <br />
        <input type="text" placeholder="Other Amount" />
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
          <label htmlFor="confirmation">
            {" "}
            Please keep my donation anonymous{" "}
          </label>
        </div>
        {/* <Checkbox style={{ fontSize: "20px" }}>
          YES! want periodic updates on VitaminAir
        </Checkbox>
        <Checkbox>YES! want periodic updates on VitaminAir</Checkbox> */}
      </>
    ),
  },
];
function Form() {
  const [current, setCurrent] = useState(0);

  const next = (e) => {
    e.preventDefault();
    setCurrent(current + 1);
  };

  const prev = (e) => {
    e.preventDefault();
    setCurrent(current - 1);
  };
  const done = (e) => {
    e.preventDefault();
    message.success("Processing complete!");
  };

  return (
    <>
      <div className="center">
        <form className="form">
          {steps[current].content}
          {current < steps.length - 1 && (
            <button className="next" onClick={next}>
              Next
            </button>
          )}
          {current === steps.length - 1 && (
            <button className="next" type="primary" onClick={done}>
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
  );
}

export default Form;
