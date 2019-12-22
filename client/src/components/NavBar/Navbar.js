import React from "react";
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = props => (

  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="/Home">Goog Boogz</a>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Search <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Saved</a>
      </li>
    </ul>
  </div>
</nav>

  )
  
  export default NavBar;