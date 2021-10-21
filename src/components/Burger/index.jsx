import React, {useRef, useEffect, useState} from "react";
import "./burger.scss";


const Burger = ({ open, setOpen }) => {

    return (
      <div className={`hamburger  ${open ? `menu_open` : `menu_closed`}  `} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </div>
    )
  }
  // Burger.propTypes = {
  //   open: bool.isRequired,
  //   setOpen: func.isRequired,
  // };
  
  export default Burger;