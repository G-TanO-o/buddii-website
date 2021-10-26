import React from "react";
import "./menu.scss";


const Menu = ({ open, setOpen, links }) => {

  return (
    <div className={`menu  ${open ? `menu_open` : `menu_closed`}`} >
      {links.map((link, index) => (
        <a key={index} className="menu_link" href={link.to}>
          <span role="img" aria-label={link.name}></span>
          {link.name}
        </a>
      ))}
    </div>
  )
}

export default Menu;