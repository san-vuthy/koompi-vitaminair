import React from "react";
import { Layout, Row, Col, Spin } from "antd";
import LeftNavbar from "../Layouts/leftNavbar";
import TopNavbar from "../Layouts/topNavbar";
// import { Content } from "antd/lib/layout/layout";

const { Content } = Layout;
const dashboard = () => {
  return (
    <React.Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <TopNavbar />
          <Content style={{ backgroundColor: "#fff" }}>
            <div className="contenContainer">
              <h1 className="title-top">Overview</h1>
              <div></div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default dashboard;
