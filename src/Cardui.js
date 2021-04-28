import React from "react";
import "./cardui.css";
import CustomizedDialogs from './CustomizedDialogs'
// import "./App.css"

function Cardui({imgUrl, heading, caption, codepenhash }) {
  return (
    <div className = "fadein">
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
    </div>
  );
}

export default Cardui;
