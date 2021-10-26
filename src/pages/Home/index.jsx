import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./home.scss";

function Home() {
  const [hover, setHover] = useState(false)

  return (
    <article className="home_container">
      <ul className="home_nav">
        <li className="home_nav_item">
          <NavLink className="nav_link" to="/aboutTool" exact activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
            About
          </NavLink>
        </li>
        <li className="home_nav_item">
          <NavLink className="nav_link" to="/features" exact activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
            Features
          </NavLink>
        </li>
        <li className="home_nav_item">
          <NavLink className="nav_link" to="/pricing" exact activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
            Pricing
          </NavLink>
        </li>
        <li>
          <h1 className="home_nav_item_title">buddii</h1>
        </li>
        <li className="home_nav_item">
          <NavLink className="nav_link" to="/aboutUs" exact activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
            About Us
          </NavLink>
        </li>
        <li className="home_nav_item">
          <NavLink className="nav_link" to="/cases" exact activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
            Cases
          </NavLink>
        </li>
        <li className="home_nav_item">
          <NavLink className="nav_link" to="/solutions" exact activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
            Solutions
          </NavLink>
        </li>
      </ul>

      <section className="home_content">
        <p className="home_content_text">Kies de service die je nodig hebt van Buddii.</p>
        <h1 className="home_content_title">Kies je destinatie</h1>

        <div className="toggle_container">
          <div className={hover ? "toggle1 toggle_hoverclass" : "toggle1"}>
            <div>
              <p className="toggle_title">Tool</p>
              <a href="/aboutTool">Buddii Tool</a>
            </div>
          </div>

          <div className="toggle2" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div>
              <p className="toggle_title">Studio</p>
              <a href="/aboutUs">Buddii Studio</a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Home;
