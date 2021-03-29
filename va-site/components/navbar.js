import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Drawer, Menu } from "antd";
import { FiMenu } from "react-icons/fi";
import styles from "../styles/Home.module.css";
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
    <div className={styles.navbar}>
      <FiMenu onClick={showDrawer} className={styles.open_menu_btn} />
      <Link href="/home">
        <img src="images/vitaminair.png" alt="logo" />
      </Link>
      <div className={styles.menu}>
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
        <ActiveLink activeClassName={styles.is_active} href="/project">
          <a className={styles.nav_link}>Project</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.is_active} href="/about">
          <a className={styles.nav_link}>About Us</a>
        </ActiveLink>
        <a className={styles.nav_link} href="https://t.me/vitaminair">
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
        <Menu className={styles.side_nav}>
          <Menu.Item>
            <Link
              className={styles.simple}
              href="/about"
              exact
              activeClassName={styles.is_actinve}
            >
              HOME
            </Link>
          </Menu.Item>
          <Menu.Item>
            {" "}
            <Link href="/about" exact activeClassName={styles.is_actinve}>
              PROJECT
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/about" activeClassName={styles.is_actinve}>
              ABOUT US
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
