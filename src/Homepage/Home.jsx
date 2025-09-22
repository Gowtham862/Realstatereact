import React from "react";
import "./Home.scss";
import Search from "../Searchbar/Search";
function Home() {
  return (
    <div className="homepage">
      <div className="textcontainer">
        <div className="wrapper">
          <h2>
            Find Real Estate & Get your dReam Find Real Estate & Get your dReam
            place

          </h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, earum!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, error.
          </p>
          <Search/>
          <div className="boxes">
            <div className="box">
                <h1>16+</h1>
                <h6>years of experience</h6>
            </div>
            <div className="box">
                <h1>200</h1>
                <h6>Award Gained</h6>
            </div>
            <div className="box">
                <h1>1200+</h1>
                <h6>property ready</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="imgcontainer">
        <img src="./realstateimage.jpg" alt="" />
      </div>
    </div>
  );
}

export default Home;
