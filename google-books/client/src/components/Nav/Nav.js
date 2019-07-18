import React from "react";
import "./style.css";
import SearchInput from "../Search/SearchInput"
import googlebookslogo from "../img/googlebookslogo.png"

var bookLogo = {
  backgroundImage: `url(${googlebookslogo})`,
  backgroundSize: '18%',
};

function Nav(props) {
  return (
    <div id="experiment">
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="nav-tags">
        <div className="page-link">
        <a className="nav-link col-4 saved" href="/saved">Saved Books</a>
        </div>
        <div className="col-sm-2" id="imgDiv">
          {/* <div id="bookImg" style={bookLogo}></div> */}
          </div>

        <div className="row" id="intro">

        <h1 className="title">Google Book Search</h1>
        <h5 className="title">Powered by React</h5>
        <SearchInput handleChange={props.handleChange} value={props.value} handleSubmit={props.handleSubmit}/>       
        </div>
        </div>
    </nav>
  </div>

  );
}

export default Nav;