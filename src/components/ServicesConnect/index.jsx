import React, {useRef, useEffect, useState} from "react";

import make from "../../assets/images/powerpoint/make.svg";
import Button from "../Button";

import "./servicesConnect.scss";

function ServicesConnect() {
  
  return (
    <>
      <section className="service">
        <div className="service_box">
          <h1 className="service_title">Services that connect you to your users</h1>
          <div className="service_grid">
            <div className="grid_item">
              <img className="service_item_img" src={make} alt="" />
              <div>
                <p className="service_item_title">Mobile application</p>
                <p className="service_item_text">Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
              </div>
              <Button text="Explore" to="#" style="second"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesConnect;
