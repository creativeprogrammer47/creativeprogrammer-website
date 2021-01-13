// snippet is rfce

import React from "react";
import logo from "./images/H - logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Togglemenu from './Togglemenu';

function Header() {
  return (
    <div className="header">
      <p className = "welcome">welcome to creativeprogrammer world 🎉</p>
      <div className="tm">
        <Togglemenu />
        </div>
        <br/>
        <br/>
        <br/>

      <img alt="logo" src={logo} className ="logoimg"/>
      <div class="wrap">
        <div className="navbar">
          <ul>
            <li><NavLink activeClassName = "active" exact to ="/">SOURCE CODE</NavLink></li>
            {/* <li><NavLink activeClassName = "active" exact to ="/sourcecode">SOURCE CODE</NavLink></li> */}
            <li><NavLink activeClassName = "active" exact to ="/websitetemplates">WEBSITE TEMPLATES</NavLink></li>
            <li><NavLink activeClassName = "active" exact to ="/links">LINKS</NavLink></li>
          </ul>
        </div>
      </div>
      {/* <div class="search">
        <div className="tm">
        <Togglemenu />
        </div> */}
        {/* <input
          type="text"
          class="searchTerm"
          placeholder="Search"
          onChange={(event) =>{
              setsearchTerm(event.target.value);
          }}
        />
        <button type="submit" class="searchButton">
          <SearchIcon />
        </button> */}
      {/* </div> */}
      <div className="linew"><div className="line"></div></div>
    </div>
  );
}

export default Header;
