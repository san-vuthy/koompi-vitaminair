// import React from 'react'
import { Row, Col, Input, Button } from "antd"
import { FaSearch } from "react-icons/fa"

function Leaderboard() {
  const active = (e) => {
    const recents = document.getElementById("most-recents")
    const trees = document.getElementById("most-trees")
    if (e.target.id === "most-recents") {
      trees.className = "clicked"
      recents.className = ""
      recents.style.zIndex = 2
      trees.style.zIndex = 1
    } else if (e.target.id === "most-trees") {
      recents.className = "clicked"

      trees.className = ""
      trees.style.zIndex = 2
      recents.style.zIndex = 1
    }
  }
  return (
    <div style={{ marginTop: "50px" }}>
      <h1>LEADERBOARD</h1>
      <Row align="middle" justify="center">
        <Col className="search-box gutter-row">
          <Input className="search" type="text" placeholder="Search" />
          <FaSearch className="fa-search" />
        </Col>
        <Col offset={1} className="gutter-row">
          <button id="most-recents" onClick={active}>
            Most Recents
          </button>
          <button id="most-trees" className="clicked" onClick={active}>
            Most Trees
          </button>
        </Col>
      </Row>
      <div className="container user-list">
        <Row className="list" align="middle">
          <Col
            className="avatar"
            xs={{ span: 24 }}
            sm={{ span: 2 }}
            md={{ span: 1 }}
          >
            <img src="/images/list-images/icon1.svg" alt="" />
          </Col>
          <Col flex="auto">
            <p className="list-title">KAYBE</p>
            <p className="list-message">Freedom & Bitcoin - The Cryptosphere</p>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24, offset: 3 }} md={{ span: 7 }}>
            <p className="badge">5 TREES</p>
            <p className="list-message">2/3/2021, 1:19:23 PM</p>
          </Col>
        </Row>
        <Row className="list" align="middle">
          <Col
            className="avatar"
            xs={{ span: 24 }}
            sm={{ span: 2 }}
            md={{ span: 1 }}
          >
            <img src="/images/list-images/icon1.svg" alt="" />
          </Col>
          <Col flex="auto">
            <p className="list-title">KAYBE</p>
            <p className="list-message">Freedom & Bitcoin - The Cryptosphere</p>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24, offset: 3 }} md={{ span: 7 }}>
            <p className="badge">5 TREES</p>
            <p className="list-message">2/3/2021, 1:19:23 PM</p>
          </Col>
        </Row>
        <Row className="list" align="middle">
          <Col
            className="avatar"
            xs={{ span: 24 }}
            sm={{ span: 2 }}
            md={{ span: 1 }}
          >
            <img src="/images/list-images/icon1.svg" alt="" />
          </Col>
          <Col flex="auto">
            <p className="list-title">KAYBE</p>
            <p className="list-message">Freedom & Bitcoin - The Cryptosphere</p>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24, offset: 3 }} md={{ span: 7 }}>
            <p className="badge">5 TREES</p>
            <p className="list-message">2/3/2021, 1:19:23 PM</p>
          </Col>
        </Row>
        <Row className="list" align="middle">
          <Col
            className="avatar"
            xs={{ span: 24 }}
            sm={{ span: 2 }}
            md={{ span: 1 }}
          >
            <img src="/images/list-images/icon1.svg" alt="" />
          </Col>
          <Col flex="auto">
            <p className="list-title">KAYBE</p>
            <p className="list-message">Freedom & Bitcoin - The Cryptosphere</p>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24, offset: 3 }} md={{ span: 7 }}>
            <p className="badge">5 TREES</p>
            <p className="list-message">2/3/2021, 1:19:23 PM</p>
          </Col>
        </Row>
        <Row className="list" align="middle">
          <Col
            className="avatar"
            xs={{ span: 24 }}
            sm={{ span: 2 }}
            md={{ span: 1 }}
          >
            <img src="/images/list-images/icon1.svg" alt="" />
          </Col>
          <Col flex="auto">
            <p className="list-title">KAYBE</p>
            <p className="list-message">Freedom & Bitcoin - The Cryptosphere</p>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24, offset: 3 }} md={{ span: 7 }}>
            <p className="badge">5 TREES</p>
            <p className="list-message">2/3/2021, 1:19:23 PM</p>
          </Col>
        </Row>
        <Row className="list" align="middle">
          <Col
            className="avatar"
            xs={{ span: 24 }}
            sm={{ span: 2 }}
            md={{ span: 1 }}
          >
            <img src="/images/list-images/icon1.svg" alt="" />
          </Col>
          <Col flex="auto">
            <p className="list-title">KAYBE</p>
            <p className="list-message">Freedom & Bitcoin - The Cryptosphere</p>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24, offset: 3 }} md={{ span: 7 }}>
            <p className="badge">5 TREES</p>
            <p className="list-message">2/3/2021, 1:19:23 PM</p>
          </Col>
        </Row>

        <a href="#form">
          <Button className="add-tree-btn">ADD YOUR TREE</Button>
        </a>
      </div>
    </div>
  )
}

export default Leaderboard
