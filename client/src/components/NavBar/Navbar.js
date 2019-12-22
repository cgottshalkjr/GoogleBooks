import React from "react";
import "./navbar.css";

const NavBar = props => (

    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" id="navLogo" href="/">Saga Clicky</a>
      <ul className="text-white nav-fills nav">
        <li className="nav-item">
          <span className="nav-link float-left"></span>
        </li>
      </ul>

    </nav>
  )
  
  export default NavBar;