import React, { useRef, useEffect, useState } from "react";
import "./menu.scss";


const Menu = ({ open, setOpen }) => {

  return (
    <div className={`menu  ${open ? `menu_open` : `menu_closed`}`} >
      <a className="menu_link" href="/">
        <span role="img" aria-label="about us"></span>
        About
      </a>
      <a className="menu_link" href="/features">
        <span role="img" aria-label="price"></span>
        Features
      </a>
      <a className="menu_link" href="/pricing">
        <span role="img" aria-label="contact"></span>
        Pricing
      </a>
    </div>
  )
}

export default Menu;