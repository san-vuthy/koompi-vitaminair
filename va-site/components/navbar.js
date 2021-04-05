import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Drawer, Menu } from "antd";
import { FiMenu } from "react-icons/fi";
import "../styles/Home.module.css";
// import "../styles.css";
import ActiveLink from "./activeLink";

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
    <div className="navbar">
      <FiMenu onClick={showDrawer} className="open-menu-btn" />
      <Link href="/">
        <img src="images/vitaminair.png" alt="logo" />
      </Link>
      <div className="menu">
        {/* <Link
          href="/"
          className={router.pathname == "/" ? "is_active" : ""}
          //   activeClassName={styles.is_actinve}
        >
          Projects
        </Link> */}
        {/* <div className={router.pathname == "/about" ? "active" : ""}>
          <Link href="/about">About Us</Link>
        </div> */}
        <ActiveLink activeClassName="is-active" href="/project">
          <a className="nav-link">Project</a>
        </ActiveLink>
        <ActiveLink activeClassName="is-active" href="/about">
          <a className="nav_link">About Us</a>
        </ActiveLink>
        <a className="nav_link" href="https://t.me/vitaminair">
          Community
        </a>
      </div>
      <Drawer
        // title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        // key={placement}
      >
        {/* <div className={styles.navbar}>
          <img src="/images/vitaminair.png" alt="logo" />
        </div> */}
        <Menu className="side-nav">
          <Menu.Item>
            <Link
              className="simple"
              href="/about"
              exact
              activeClassName="is-active"
            >
              HOME
            </Link>
          </Menu.Item>
          <Menu.Item>
            {" "}
            <Link href="/about" exact activeClassName="is-active">
              PROJECT
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/about" activeClassName="is-active">
              ABOUT US
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
