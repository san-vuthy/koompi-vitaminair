import { NavLink } from "react-router-dom"

function navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src="/images/logo.png" alt="logo" />
      </NavLink>
      <div className="menu">
        <NavLink to="/projects" activeClassName="is-active">
          Projects
        </NavLink>
        <NavLink to="/about" activeClassName="is-active">
          About Us
        </NavLink>
        <a href="https://t.me/vitaminair">Communiy</a>
      </div>
    </div>
  )
}

export default navbar
