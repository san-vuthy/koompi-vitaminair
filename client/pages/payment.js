import React from "react";

const Payment = () => {
  return (
    <div className="backgournd-payment">
      <br></br>
      <center>
        <h1>Payment</h1>
        <div style={{ width: "50%" }}>
          <p>
            Contribute to join VitaminAir team develop community. Our main
            support is supplement teachers for local school, local ranger patrol
            our forest, and support community emergency needs.
          </p>
        </div>
      </center>
      <div className="payment-box">
        <center>
          {/* <img
            className="aba-image"
            alt="A rather marvellous macaw, opening one of its wings to support the cause."
            src="/images/abalogo.png"
          /> */}
          <div className="aba-image">
            <h1>ABA</h1>
          </div>
        </center>
        <center>
          <h4>Name</h4>
          <h4 style={{ fontSize: "25px", color: "#00ba9f" }}>
            THUL SELA AND HIENG DANE
          </h4>
          <br></br>
          <h4>Reciever Account Number</h4>
          <h1>002693892</h1>
        </center>
      </div>
    </div>
  );
};

export default Payment;
