import React from "react";
import { Layout, Row, Col, Spin } from "antd";
import LeftNavbar from "../Layouts/leftNavbar";
import TopNavbar from "../Layouts/topNavbar";

const { Content } = Layout;
const donationers = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <TopNavbar />
          <Content style={{ backgroundColor: "#fff" }}>
            <div className="contenContainer">
              <h1 className="title-top">Donationers</h1>
              <div></div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default donationers;
