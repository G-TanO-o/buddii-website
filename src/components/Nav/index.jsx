import React, { useRef, useEffect, useState } from "react";
// import Calender from "../../components/Dashboard/Calendar/index";
import { NavLink } from "react-router-dom";
import Burger from "../Burger";
import Menu from "../Menu";
import Button from "../Button";



import "./nav.scss";

function Nav({ open, setOpen }) {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  console.log(windowDimensions);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav>
        <div className="nav_balk">

          {windowDimensions.width > 768 ? (
            <div className="full_nav_balk">
              <ul className="nav_ul">
                <a className="nav_link" href="/">
                  <p className="buddii_logo">buddii</p>
                </a>
                <NavLink className="nav_link" to="/" exact activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
                  <span role="img" aria-label="about us"></span>
                  About
                </NavLink>
                <NavLink className="nav_link" to="/features" activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
                  <span role="img" aria-label="features"></span>
                  Features
                </NavLink>
                <NavLink className="nav_link" to="/pricing" activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
                  <span role="img" aria-label="contact"></span>
                  Pricing
                </NavLink>
              </ul>
              <div className="buttons_nav">
                <Button text="Sign in" to="#" style="second_black" arrowColor="arrow_none" />
                <div style={{ marginLeft: 30 }}>
                  <Button text="Get Started" to="#" style="primery" />
                </div>
              </div>
            </div>
          ) : (
            <>
              <p className="buddii_logo_mobile">buddii</p>
              <Burger open={open} setOpen={setOpen} />
            </>
          )}
        </div>
        <Menu open={open} setOpen={setOpen} />
      </nav>
    </>
  );
}

export default Nav;
