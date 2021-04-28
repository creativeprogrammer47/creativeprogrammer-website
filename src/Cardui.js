import React from "react";
import "./cardui.css";
import { Link } from "react-router-dom";
import CustomizedDialogs from './CustomizedDialogs'

function Cardui({imgUrl, heading, caption, codepenhash }) {
  return (
    <div>
      {/* <Link to={{ pathname: `${sourceurl}` }} target="_blank" > */}
      <div className="card card1">
        <div className="container">
          <img className = "imgc" src= {imgUrl}/>
        </div>
        <div className="details">
          <h3>{heading}</h3>
          <p>
            {caption}
          </p>
          <CustomizedDialogs title = {heading} codepenhash = {codepenhash}/>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default Cardui;
