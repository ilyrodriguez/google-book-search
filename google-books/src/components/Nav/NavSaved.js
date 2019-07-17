import React from "react";
import "./style.css";
import googlebookslogo from "../img/googlebookslogo.png"


var bookLogo = {
  backgroundImage: `url(${googlebookslogo})`,
  backgroundSize: '18%',

};

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="nav-tags">
        <div className="page-link">
        <a className="nav-link col-4 search" href="/">Search</a>
        </div>
        <div className="row">
        <div id="bookImg" style={bookLogo}></div>
        <h1 className="title">Google Book Search</h1>
        <h5 className="title">Powered by React</h5>
        </div>
        </div>
      
      
    </nav>
  );
}

export default Nav;