// import React from 'react'
import { Row, Col, Input, Button, TreeSelect } from "antd"
import { FaSearch } from "react-icons/fa"
import { useQuery } from "@apollo/client"
import { GET_DONATIONS } from "../../graphql/query"
function Leaderboard() {
  //=====get Data==========
  const { loading, data: donateData, error } = useQuery(GET_DONATIONS)
  if (loading) return "loading..."
  if (error) return `Error! ${error.message}`
  console.log(donateData)
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
        {donateData.get_donations.map((res) => {
          const { tree, name, anonymous, create_at, user_message } = res
          console.log(anonymous)
          return (
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
                <p className="list-title">{name}</p>
                <p className="list-message">{user_message}</p>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 24, offset: 3 }} md={{ span: 7 }}>
                <p className="badge">{tree} trees</p>

                <p className="list-message">2/3/2021, 1:19:23 PM</p>
              </Col>
            </Row>
          )
        })}
        <a href="#form">
          <Button className="add-tree-btn">ADD YOUR TREE</Button>
        </a>
      </div>
    </div>
  )
}

export default Leaderboard
// import React from "react"
// import TestForm from "./testForm"

// const Leaderboard = () => {
//   return (
//     <div>
//       <TestForm />
//     </div>
//   )
// }

// export default Leaderboard
