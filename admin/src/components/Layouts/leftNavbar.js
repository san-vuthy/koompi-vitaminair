import React from "react";
import { Layout, Menu } from "antd";
// import {
//   BankOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
//   AppstoreAddOutlined,
//   PartitionOutlined,
//   BellOutlined,
// } from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const { SubMenu } = Menu;
const LeftNavbar = () => {
  const pathname = window.location.pathname;
  return (
    <React.Fragment>
      <Sider className="site-layout-background" width={290}>
        <div className="logo">
          <center>
            <img style={{ maxWidth: "80%", padding: "8px" }} src={logo} />
          </center>
        </div>
        <Menu
          theme="dark"
          style={{ height: "100%", borderRight: 0 }}
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={[pathname]}
          mode="inline"
        >
          <Menu.Item key="/admin/dashboard" icon={<PieChartOutlined />}>
            <Link to="/admin/dashboard" />
            Dashboard
          </Menu.Item>
          <Menu.Item key="/admin/donationers" icon={<DesktopOutlined />}>
            <Link to="/admin/donationers" />
            Donationers
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Initation">
            <Menu.Item key="3">
              <Link to="/admin/initations" />
              Initation
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/admin/addinitation" />
              Add Initation
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
    </React.Fragment>
  );
};

export default LeftNavbar;
