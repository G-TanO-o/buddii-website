import React, {useRef, useEffect, useState} from "react";
// import Calender from "../../components/Dashboard/Calendar/index";
import Burger from "../Burger";
import Menu from "../Menu";
import Button from "../Button";



import "./nav.scss";

function Nav({open, setOpen}) {
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
        
        { windowDimensions.width > 768 ?( 
        <div className="full_nav_balk">
          <ul className="nav_ul">
            <a className="nav_link" href="/">
              <p className="buddii_logo">buddii</p>
            </a>
            <a className="nav_link" href="/">
              <span role="img" aria-label="about us"></span>
              About
            </a>
            <a className="nav_link" href="/features">
              <span role="img" aria-label="features"></span>
              Features
            </a>
            <a className="nav_link" href="/">
              <span role="img" aria-label="contact"></span>
              Pricing
            </a>
            <a className="nav_link" href="/">
              <span role="img" aria-label="contact"></span>
              Jobs
            </a>
          </ul>
          <div className="buttons_nav">
            <Button text="Sign in" to="#" style="second_black" arrowColor="arrow_none" />
            <Button text="Get started" to="#" style="primery"/>
          </div>
        </div>
        ):(
          <>
          <p className="buddii_logo_mobile">buddii</p>
          <Burger open={open} setOpen={setOpen}/>
        </>
        )}
      </div>
      <Menu open={open} setOpen={setOpen}/>
    </nav>
    </>
  );
}

export default Nav;
