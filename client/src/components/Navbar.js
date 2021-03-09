import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { Drawer, Menu } from "antd"
import { FiMenu } from "react-icons/fi"

function Navbar() {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  return (
    <div className="navbar">
      <NavLink to="/">
        <img src="/images/vitaminair.png" alt="logo" />
      </NavLink>
      <div className="menu">
        <NavLink to="/projects" activeClassName="is-active">
          Projects
        </NavLink>
        <NavLink to="/about" activeClassName="is-active">
          About Us
        </NavLink>
        <a href="https://t.me/vitaminair">Community</a>
      </div>

      <FiMenu onClick={showDrawer} className="open-menu-btn" />
      <Drawer placement="left" closable={false} onClose={onClose} visible={visible}>
        <div className="navbar">
          <img src="/images/vitaminair.png" alt="logo" />{" "}
        </div>
        <Menu className="side-nav">
          <Menu.Item onClick={onClose}>
            <NavLink className="sample" to="/" exact activeClassName="is-active">
              HOME{" "}
            </NavLink>
          </Menu.Item>

          <Menu.Item onClick={onClose}>
            {" "}
            <NavLink to="/projects" exact activeClassName="is-active">
              PROJECT
            </NavLink>
          </Menu.Item>
          <Menu.Item onClick={onClose}>
            <NavLink to="/about" activeClassName="is-active">
              ABOUT US
            </NavLink>
          </Menu.Item>
          <Menu.Item onClick={onClose}>
            {" "}
            <a href="https://t.me/vitaminair">COMMUNITY</a>{" "}
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  )
}

export default Navbar
