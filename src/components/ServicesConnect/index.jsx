import React, { useRef, useEffect, useState } from "react";

import ServiceCard from "./ServiceCard"
import make from "../../assets/images/powerpoint/make.svg";
import components from "../../assets/images/powerpoint/components.svg";
import flexibility from "../../assets/images/powerpoint/flexibility.svg";
import layout from "../../assets/images/powerpoint/layout.svg";
import user from "../../assets/images/powerpoint/user.svg";
import organised from "../../assets/images/powerpoint/organised.svg";

import "./servicesConnect.scss";

function ServicesConnect() {

  return (
    <>
      <section className="service">
        <div className="service_box">
          <h1 className="service_title">Services that connect you to your users</h1>
          <div className="service_grid">
            <ServiceCard img={make} title="Mobile Application" text="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." />
            <ServiceCard img={user} title="Web Application" text="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." />
            <ServiceCard img={layout} title="User Interface Design" text="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." />
            <ServiceCard img={components} title="Strategy and Branding" text="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." />
            <ServiceCard img={flexibility} title="Performance Marketing" text="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." />
            <ServiceCard img={organised} title="Project Management" text="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." />
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesConnect;
