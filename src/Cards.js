import React, { Suspense } from 'react';
import { useState } from "react";
import "./cards.css";
import SearchIcon from "@material-ui/icons/Search";
import DATA from "./Data.json";
import './App.css'
const Cardui = React.lazy(() => import('./Cardui'));
// import Togglemenu from './Togglemenu';


function Cards() {
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <div className="card-body">
      <div className="search">
      {/* <div className="tm">
        <Togglemenu />
        </div> */}
        <input
          type="text"
          class="searchTerm"
          placeholder="Live Search"
          onChange={(event) => {
            setsearchTerm(event.target.value);
          }}
        />
        <button type="submit" class="searchButton">
          <SearchIcon />
        </button>
      </div>
      <div className="cards">

        {DATA.filter((val) =>{
            if(searchTerm == ""){
                return val
            }else if(val.heading.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map((val, key) => {
          return (
            <Suspense fallback={<div>Loading...</div>}>
            <Cardui 
              imgUrl={val.imgUrl}
              heading={val.heading}
              caption={val.caption}
              sourceurl={val.sourceurl}
              codepenhash={val.codepenhash}
            />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
