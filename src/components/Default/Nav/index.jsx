import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import Burger from "../Burger";
import Menu from "../Menu";
import Button from "../Button";

import "./nav.scss";

function Nav({ open, setOpen, tool = true, links }) {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

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
                {links.map((link, index) => (
                  <NavLink key={index} className="nav_link" to={link.to} activeStyle={{ color: '#19CFD9', borderBottom: "2px solid" }}>
                    <span role="img" aria-label={link.name}></span>
                    {link.name}
                  </NavLink>
                ))}
              </ul>
              {tool ? (
                <div className="buttons_nav">
                  <Button text="Sign in" to="#" styling="second_black" arrowColor="arrow_none" />
                  <div style={{ marginLeft: 30 }}>
                    <Button text="Get Started" to="#" styling="primery" />
                  </div>
                </div>
              ) : (
                <div className="buttons_nav">
                  <Button text="Demo" to="#" styling="second_black" arrowColor="arrow_none" />
                  <div style={{ marginLeft: 30 }}>
                    <Button text="Simuleer offerte" to="#" styling="primery" />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <a className="buddii_logo_mobile" href="/">buddii</a>
              <Burger open={open} setOpen={setOpen} />
            </>
          )}
        </div>
        <Menu open={open} setOpen={setOpen} links={links} />
      </nav>
    </>
  );
}

export default Nav;
