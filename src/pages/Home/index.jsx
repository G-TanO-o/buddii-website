import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./home.scss";

function Home() {
  const [hover, setHover] = useState(false)

  return (
    <article className="home_container">
      <ul className="home_nav">
        <li className="home_nav_item">
          <NavLink className="nav_link nav_link-tool" to="/pricing" exact activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
            Pricing
          </NavLink>
        </li>
        <li className="home_nav_item">
          <NavLink className="nav_link nav_link-tool" to="/features" exact activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
            Features
          </NavLink>
        </li>
        <li className="home_nav_item">
          <NavLink className="nav_link nav_link-tool" to="/tool" exact activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
            Tool
          </NavLink>
        </li>
        <li>
          <h1 className="home_nav_item_title">buddii</h1>
        </li>
        <li className="home_nav_item">
          <NavLink className="nav_link nav_link-studio" to="/studio" exact activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
            Studio
          </NavLink>
        </li>
        <li className="home_nav_item">
          <NavLink className="nav_link nav_link-studio" to="/cases/1" exact activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
            Cases
          </NavLink>
        </li>
        <li className="home_nav_item">
          <NavLink className="nav_link nav_link-studio" to="/solutions/1" exact activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
            Solutions
          </NavLink>
        </li>
      </ul>

      <section className="home_content">
        <p className="home_content_text">Kies de Buddii service die bij u past.</p>


        <div className="toggle_container">
          <div className={hover ? "toggle1 toggle_hoverclass" : "toggle1"}>
            <div>
              <p className="toggle_title">Tool</p>
              <a href="/tool">Buddii Tool</a>
            </div>
          </div>

          <div className="toggle2" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div>
              <p className="toggle_title">Studio</p>
              <a href="/studio">Buddii Studio</a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Home;
