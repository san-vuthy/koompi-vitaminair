// import React from 'react'
import { Row, Col } from "antd";

function Leaderboard() {
  return (
    <div className="container">
      <h1>LEADERBOARD</h1>
      <Row justify="space-around">
        <Col className="search-box">
          <input className="search" type="text" placeholder="Search" />
          <i className="fas fa-search" />
        </Col>
        <Col>
          <button className="most-recents-trees">Most Recents</button>
          <button
            className="most-recents-trees"
            style={{
              marginLeft: "-20px",
              backgroundColor: "rgba(12, 176, 75, 0.082)",
              color: "#057630",
            }}
          >
            Most Trees
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default Leaderboard;
