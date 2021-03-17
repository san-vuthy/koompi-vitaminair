import React from "react";
import { Layout, Row, Col, Spin } from "antd";
import LeftNavbar from "../Layouts/leftNavbar";
import TopNavbar from "../Layouts/topNavbar";
import FooterDashboard from "../Layouts/footer";
import { useQuery } from "@apollo/client";
import Countup from "react-countup";

import {
  GET_MEMBERS,
  GET_ABOUTS,
  GET_INITATIONS,
  GET_PROJECTS,
} from "../../graphql/query";
import { FaBook, FaUserFriends, FaRegListAlt, FaMap } from "react-icons/fa";
const { Content } = Layout;
const Dashboard = () => {
  const { loading: loadingProject, data: dataProject } = useQuery(GET_PROJECTS);
  const { loading: loadingMember, data: dataMember } = useQuery(GET_MEMBERS);
  const { loading: loadingAbout, data: dataAbout } = useQuery(GET_ABOUTS);
  const { loading: loadingInitation, data: dataInitation } = useQuery(
    GET_INITATIONS
  );
  if (loadingProject || loadingAbout || loadingInitation || loadingMember)
    return (
      <center style={{ marginTop: "100px" }}>
        <Spin style={{ color: "red !important" }} size="large" />
      </center>
    );
  return (
    <React.Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <TopNavbar />
          <Content style={{ backgroundColor: "#fff" }}>
            <div className="contenContainer">
              <h1 className="title-top">Overview</h1>
              <Row gutter={[32]}>
                <Col lg={6}>
                  <Row gutter={[12]} className="widget-card">
                    <Col sm={12} md={12}>
                      <FaRegListAlt className="background-image-widget" />
                    </Col>
                    <Col sm={12} md={12}>
                      <Countup
                        end={dataProject.get_projects.length}
                        className="counter"
                      />
                      <h1 className="text-details"> Total Projects</h1>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <Row className="widget-card2">
                    <Col sm={12} md={12}>
                      <FaMap className="background-image-widget2" />
                    </Col>
                    <Col sm={12} md={12}>
                      <Countup
                        end={dataInitation.get_initations.length}
                        className="counter2"
                      />
                      <h1 className="text-details2"> Total Initations</h1>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <Row className="widget-card3">
                    <Col sm={12} md={12}>
                      <FaBook className="background-image-widget3" />
                    </Col>
                    <Col sm={12} md={12}>
                      <Countup
                        end={dataAbout.get_abouts.length}
                        className="counter3"
                      />
                      <h1 className="text-details3"> Total Abouts</h1>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <Row className="widget-card4">
                    <Col sm={12} md={12}>
                      <FaUserFriends className="background-image-widget4" />
                    </Col>
                    <Col sm={12} md={12}>
                      <Countup
                        end={dataMember.get_members.length}
                        className="counter4"
                      />
                      <h1 className="text-details4"> Total Members</h1>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Content>
          <FooterDashboard />
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default Dashboard;
