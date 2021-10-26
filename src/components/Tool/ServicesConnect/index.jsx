import React from "react";

import ServiceCard from "./ServiceCard"
import Button from "../Button"

import Make from "../../assets/images/powerpoint/make.svg";
import Components from "../../assets/images/powerpoint/components.svg";
import Flexibility from "../../assets/images/powerpoint/flexibility.svg";
import Layout from "../../assets/images/powerpoint/layout.svg";
import User from "../../assets/images/powerpoint/user.svg";
import Organised from "../../assets/images/powerpoint/organised.svg";

import "./servicesConnect.scss";

function ServicesConnect() {

  return (
    <>
      <section className="service">
        <div className="service_box">
          <h1 className="service_title">Services that connect you to your users</h1>
          <div className="service_grid">
            <ServiceCard img={Make} title="Mobile Application" text="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." />
            <ServiceCard img={User} title="Web Application" text="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." />
            <ServiceCard img={Layout} title="User Interface Design" text="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." />
            <ServiceCard img={Components} title="Strategy and Branding" text="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." />
            <ServiceCard img={Flexibility} title="Performance Marketing" text="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." />
            <ServiceCard img={Organised} title="Project Management" text="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." />
          </div>
          <div className="service_start_button">
            <Button text="Start now" to="#" styling="second_white" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesConnect;
