import React from "react";

import Button from "../../Button";

import "./servicesConnect.scss";

function ServicesConnect({ text, title, img }) {

  return (
    <div className="grid_item">
      <img className="service_item_img" src={img} alt="" />
      <div>
        <p className="service_item_title">{title}</p>
        <p className="service_item_text">{text}</p>
      </div>
      <Button text="Explore" to="#" styling="second_green" />
    </div>
  );
}

export default ServicesConnect;
