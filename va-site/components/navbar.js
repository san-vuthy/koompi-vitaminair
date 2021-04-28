import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Drawer, Menu, Affix, Layout } from "antd";
import { FiMenu } from "react-icons/fi";
import ActiveLink from "./activeLink";
// import Head from "next/head";
// import NProgress from "nprogress";
// import Router from "next/router";

// Router.onRouteChangeStart = (url) => {
//   console.log(url);
//   NProgress.start();
// };
// Router.onRouteChangeComplete = () => NProgress.done();
// Router.onRouteChangeEroor = () => NProgress.done();

const { Header } = Layout;
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <React.Fragment>
      {/* <div className="container-navbar"> */}
      <div className="navbar">
        <FiMenu onClick={showDrawer} className="open-menu-btn" />
        <Link href="/">
          <img
            style={{ cursor: "pointer" }}
            src="/images/vitaminair.png"
            alt="logo"
          />
        </Link>
        <div className="menu">
          <ActiveLink activeClassName="is-active" href="/project">
            <a className="nav-link">Project</a>
          </ActiveLink>
          <ActiveLink activeClassName="is-active" href="/plants">
            <a className="nav-link">Plants</a>
          </ActiveLink>
          <ActiveLink activeClassName="is-active" href="/about">
            <a className="nav-link">About Us</a>
          </ActiveLink>
          <a className="nav_link" href="https://t.me/vitaminair">
            Community
          </a>
        </div>

        {/* Mobile display */}

        <Drawer
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
          // key={placement}
        >
          <Menu onClick={onClose} className="side-nav">
            <Menu.Item key="1">
              <Link
                className="simple"
                href="/"
                exact
                activeClassName="is-active"
              >
                HOME
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              {" "}
              <Link href="/project" exact activeClassName="is-active">
                PROJECT
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link key="3" href="/plants" activeClassName="is-active">
                plants
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link key="4" href="/about" activeClassName="is-active">
                ABOUT US
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link href="https://t.me/vitaminair" activeClassName="is-active">
                COMMUNITY
              </Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default Navbar;
