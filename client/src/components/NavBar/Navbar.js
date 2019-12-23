import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";

const NavBar = props => (

  <nav className="navbar navbar-expand-lg" id="navBg">
  <a className="navbar-brand" href="/">Google Books</a>
  
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Search <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Saved</a>
      </li>
    </ul>
</nav>

  )
  
  export default NavBar;