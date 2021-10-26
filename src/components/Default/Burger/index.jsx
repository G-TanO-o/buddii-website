import React from "react";
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

export default Burger;