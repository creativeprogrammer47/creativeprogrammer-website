import React, { Suspense } from 'react';
import { useState } from "react";
import "./cards.css";
import SearchIcon from "@material-ui/icons/Search";
import './App.css';
const Cardui = React.lazy(() => import('./Cardui'));

function Cards() {
  const [searchTerm, setsearchTerm] = useState("");
  const [data, setdata] = useState([]);

  const getapi = () =>{

    fetch('https://cp-website-api.herokuapp.com/posts')
    .then((response) => response.json())
    .then((json) => {
      setdata(json);
    })
  }

  getapi();

  return (
    <div className="card-body">
      <div className="search">
      
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
        {data.filter((val) =>{
            if(searchTerm == ""){
                return val
            }else if(val.caption.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map((val, key) => {
          return (
            <Suspense fallback={<div>Loading...</div>}>
            <Cardui 
              heading={val.heading}
              caption={val.caption}
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
