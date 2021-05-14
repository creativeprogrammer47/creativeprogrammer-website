import React from "react";
import "./cardui.css";
import CustomizedDialogs from './CustomizedDialogs'
// import "./App.css"

function Cardui({ heading, caption, codepenhash }) {
  return (
    <div className = "fadein">
      <div className="card card1">
        <div className="container">
          <img className = "imgc" src= {`https://assets.codepen.io/6192600/internal/screenshots/pens/${codepenhash}.default.png?fit=cover&format=auto&ha=true&height=690&quality=100&v=2&version=1620563355&width=900`}/>
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
