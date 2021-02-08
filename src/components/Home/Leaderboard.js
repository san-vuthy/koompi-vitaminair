// import React from 'react'
import { Row, Col } from "antd";
import { FaSearch } from "react-icons/fa";

function Leaderboard() {
  const active = (e) => {
    const recents = document.getElementById("most-recents");
    const trees = document.getElementById("most-trees");
    if (e.target.id === "most-recents") {
      trees.className = "active";
      recents.className = "";
      recents.style.zIndex = 2;
      trees.style.zIndex = 1;
    } else if (e.target.id === "most-trees") {
      recents.className = "active";

      trees.className = "";
      trees.style.zIndex = 2;
      recents.style.zIndex = 1;
    }
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <h1>LEADERBOARD</h1>
      <Row justify="center">
        <Col style={{ marginRight: "50px" }} className="search-box gutter-row">
          <input className="search" type="text" placeholder="Search" />
          {/* <i className="fas fa-search" /> */}
          <FaSearch className="fa-search" />
        </Col>
        <Col style={{ marginLeft: "50px" }} className="gutter-row">
          <button
            id="most-recents"
            onClick={active}
            style={{ marginRight: "-5px", height: "41px" }}
          >
            Most Recents
          </button>
          <button
            id="most-trees"
            className="active"
            onClick={active}
            style={{ marginLeft: "-5px", height: "41px" }}
          >
            Most Trees
          </button>
        </Col>
      </Row>
      <div className="user-list">
        <Row className="list" justify="space-between" align="middle">
          <img src="/images/list-images/icon1.svg" alt="" />
          <Col>
            <p className="list-title">KAYBE</p>
            <p className="list-message">Freedom & Bitcoin - The Cryptosphere</p>
          </Col>
          <Col>
            <p className="badge">5 TREES</p>
            <p className="list-message">2/3/2021, 1:19:23 PM</p>
          </Col>
        </Row>
        <Row className="list" justify="space-between" align="middle">
          <img src="/images/list-images/icon1.svg" alt="" />
          <Col>
            <p className="list-title">KAYBE</p>
            <p className="list-message">Freedom & Bitcoin - The Cryptosphere</p>
          </Col>
          <Col>
            <p className="badge">5 TREES</p>
            <p className="list-message">2/3/2021, 1:19:23 PM</p>
          </Col>
        </Row>
        <Row className="list" justify="space-between" align="middle">
          <img src="/images/list-images/icon1.svg" alt="" />
          <Col>
            <p className="list-title">KAYBE</p>
            <p className="list-message">Freedom & Bitcoin - The Cryptosphere</p>
          </Col>
          <Col>
            <p className="badge">5 TREES</p>
            <p className="list-message">2/3/2021, 1:19:23 PM</p>
          </Col>
        </Row>
        <Row className="list" justify="space-between" align="middle">
          <img src="/images/list-images/icon1.svg" alt="" />
          <Col>
            <p className="list-title">KAYBE</p>
            <p className="list-message">Freedom & Bitcoin - The Cryptosphere</p>
          </Col>
          <Col>
            <p className="badge">5 TREES</p>
            <p className="list-message">2/3/2021, 1:19:23 PM</p>
          </Col>
        </Row>
        <Row className="list" justify="space-between" align="middle">
          <img src="/images/list-images/icon1.svg" alt="" />
          <Col>
            <p className="list-title">KAYBE</p>
            <p className="list-message">Freedom & Bitcoin - The Cryptosphere</p>
          </Col>
          <Col>
            <p className="badge">5 TREES</p>
            <p className="list-message">2/3/2021, 1:19:23 PM</p>
          </Col>
        </Row>
        <Row className="list" justify="space-between" align="middle">
          <img src="/images/list-images/icon1.svg" alt="" />
          <Col>
            <p className="list-title">KAYBE</p>
            <p className="list-message">Freedom & Bitcoin - The Cryptosphere</p>
          </Col>
          <Col>
            <p className="badge">5 TREES</p>
            <p className="list-message">2/3/2021, 1:19:23 PM</p>
          </Col>
        </Row>
        <a href="#form">
          <button style={{ width: "228px", marginTop: "50px" }}>
            ADD YOUR TREE
          </button>
        </a>
      </div>
    </div>
  );
}

export default Leaderboard;
