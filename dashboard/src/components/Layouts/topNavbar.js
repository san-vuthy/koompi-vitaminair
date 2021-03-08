import React from "react";

import { HiOutlineCog, HiQuestionMarkCircle, HiLogout } from "react-icons/hi";
import { Layout, Avatar, Popover, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import avatar from "../../assets/undraw_male_avatar_323b.png";

// import { useQuery } from "@apollo/client";
// import { GET_USER } from "../../graphql/query";

const { Header } = Layout;
// const { Search } = Input;
const user = localStorage.getItem("id");
const TopNavbar = () => {
  // const { loading: userLoadingg, data: userData } = useQuery(GET_USER, {
  //   variables: { id: user },
  // });

  // if (userLoadingg) return null;

  // if (userData === undefined || userData === null) {
  //   window.location.replace("/login");
  // }
  return (
    <React.Fragment>
      <Header
        style={{
          backgroundColor: "rgb(215, 236, 223)",
        }}
      >
        <Popover
          placement="bottomRight"
          title={null}
          content={
            <div style={{ width: "270px" }}>
              <Row gutter={[24, 24]}>
                <Col span={4}>
                  {/* <img
                    className="avatarNavbar"
                    // src={userData.user.avatar}
                    src={avatar}
                    alt="avatar"
                  /> */}
                  <Avatar
                    className="navbar-avata"
                    // src={userData.user.avatar}
                    src={avatar}
                    size={55}
                  ></Avatar>
                </Col>
                <Col span={20}>
                  <div>
                    <div className="popover-text">
                      {/* {userData.user.fullname} */}
                    </div>
                    {/* <span>{userData.user.email}</span> */}
                  </div>
                </Col>
              </Row>
              <div className="user-bottom-border"></div>
              <Row className="accountNavbarhover">
                <Col style={{ paddingTop: "4px" }} span={4}>
                  <HiOutlineCog style={{ fontSize: "21px" }} />
                </Col>

                <Col style={{ paddingTop: "4px" }} span={20}>
                  Setting
                </Col>
              </Row>
              <Row className="accountNavbarhover">
                <Col style={{ paddingTop: "4px" }} span={4}>
                  <HiQuestionMarkCircle style={{ fontSize: "21px" }} />
                </Col>
                <Col style={{ paddingTop: "4px" }} span={20}>
                  Help
                </Col>
              </Row>
              <Row className="accountNavbarhover">
                <Col style={{ paddingTop: "4px" }} span={4}>
                  <HiLogout style={{ fontSize: "21px" }} />
                </Col>
                <Col className="logout" style={{ paddingTop: "4px" }} span={20}>
                  <Link to="/logout">Logout</Link>
                </Col>
              </Row>
            </div>
          }
          trigger="click"
        >
          <div className="sub-topnavbar">
            <Avatar
              className="navbar-avata"
              // src={userData.user.avatar}
              src={avatar}
              size={55}
            ></Avatar>
          </div>
        </Popover>
        {/* <Search
          placeholder="Search ..."
          allowClear
          enterButton="Search"
          className="search-navbar"
        /> */}
      </Header>
    </React.Fragment>
  );
};

export default TopNavbar;
