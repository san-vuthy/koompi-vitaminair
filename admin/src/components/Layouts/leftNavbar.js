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
          <SubMenu
            key={
              pathname === "/admin/initations"
                ? "/admin/initations"
                : "/admin/addinitation"
                ? "/admin/addinitation"
                : ""
            }
            icon={<UserOutlined />}
            title="Initation"
          >
            <Menu.Item key="/admin/initations">
              <Link to="/admin/initations" />
              Initations
            </Menu.Item>
            <Menu.Item key="/admin/addinitation">
              <Link to="/admin/addinitation" />
              Add Initation
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key={
              pathname === "/admin/members"
                ? "/admin/members"
                : "/admin/addmember"
                ? "/admin/addmember"
                : ""
            }
            icon={<TeamOutlined />}
            title="Team"
          >
            <Menu.Item key="/admin/members">
              <Link to="/admin/members" />
              Members
            </Menu.Item>
            <Menu.Item key="/admin/addmember">
              <Link to="/admin/addmember" />
              AddMember
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key={
              pathname === "/admin/abouts"
                ? "/admin/abouts"
                : "/admin/addabout"
                ? "/admin/addabout"
                : ""
            }
            icon={<TeamOutlined />}
            title="About"
          >
            <Menu.Item key="/admin/abouts">
              <Link to="/admin/abouts" />
              Abouts
            </Menu.Item>
            <Menu.Item key="/admin/addabout">
              <Link to="/admin/addabout" />
              AddAbout
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key={
              pathname === "/admin/projects"
                ? "/admin/projects"
                : "/admin/addproject"
                ? "/admin/addproject"
                : ""
            }
            icon={<TeamOutlined />}
            title="Project"
          >
            <Menu.Item key="/admin/projects">
              <Link to="/admin/projects" />
              Projects
            </Menu.Item>
            <Menu.Item key="/admin/addproject">
              <Link to="/admin/addproject" />
              AddProject
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </React.Fragment>
  );
};

export default LeftNavbar;
