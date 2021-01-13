import React from "react";
import { useState } from "react";
import "./cards.css";
import Cardui from "./Cardui";
import SearchIcon from "@material-ui/icons/Search";
import DATA from "./Data.json";
// import Togglemenu from './Togglemenu';


function Cards() {
  const [searchTerm, setsearchTerm] = useState("");

//   const [posts, setPosts] = useState([
//     {
//       imgUrl:
//         "https://raw.githubusercontent.com/creativeprogrammer47/loadinganimation/main/l1.png",
//       heading: "AMAZING LOADING ANIMATION USING PURE CSS 😍",
//       caption:
//         "Amazing code building loading animation with including shaking animation",
//       sourceurl: "https://github.com/creativeprogrammer47/loadinganimation",
//     },
//     {
//       imgUrl:
//         "https://raw.githubusercontent.com/creativeprogrammer47/hamburgerMenuAnimation/main/HM1.png",
//       heading: "Modern hamburger menu animation using html css and javascript ",
//       caption:
//         "Amazing code building loading animation with including shaking animation",
//       sourceurl:
//         "https://github.com/creativeprogrammer47/hamburgerMenuAnimation",
//     },
//     {
//       imgUrl:
//         "https://raw.githubusercontent.com/creativeprogrammer47/ButtonReflectionEffect/main/SA1.png",
//       heading: "AMAZING search box ANIMATION USING PURE CSS 😍",
//       caption:
//         "Amazing code building loading animation with including shaking animation",
//       sourceurl:
//         "https://github.com/creativeprogrammer47/ButtonReflectionEffect",
//     },
//     {
//       imgUrl:
//         "https://raw.githubusercontent.com/creativeprogrammer47/GlassmorphismProfileCard/main/g1.png",
//       heading: "AMAZING search box ANIMATION USING PURE CSS 😍",
//       caption:
//         "Amazing code building loading animation with including shaking animation",
//       sourceurl:
//         "https://github.com/creativeprogrammer47/GlassmorphismProfileCard",
//     },
//     {
//       imgUrl:
//         "https://raw.githubusercontent.com/creativeprogrammer47/SlidingPerspective/main/SPR.jpg",
//       heading: "Sliding perspective animimation",
//       caption: "Sliding perspective animation using css ",
//       sourceurl: "https://github.com/creativeprogrammer47/SlidingPerspective",
//     },
//   ]);

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
        {/* {posts.map((post) => (

          <Cardui
            imgUrl={post.imgUrl}
            heading={post.heading}
            caption={post.caption}
            sourceurl={post.sourceurl}
          />
        ))} */}

        {DATA.filter((val) =>{
            if(searchTerm == ""){
                return val
            }else if(val.heading.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map((val, key) => {
          return (
            <Cardui
              imgUrl={val.imgUrl}
              heading={val.heading}
              caption={val.caption}
              sourceurl={val.sourceurl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
