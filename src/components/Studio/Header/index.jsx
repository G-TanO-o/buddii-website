import React from "react";

import stripeLeft from "../../../assets/images/strokes-links.svg"
import stripeRechts from "../../../assets/images/strokes-rechts.svg"
import Video from "../../../assets/images/headerStudio/header.mp4"
import arrowDown from "../../../assets/images/arrow-down.svg"
import airbnb from "../../../assets/images/companies/Airbnb.svg"
import google from "../../../assets/images/companies/Google.svg"
import hubspot from "../../../assets/images/companies/Hubspot.svg"
import Microsoft from "../../../assets/images/companies/Microsoft.svg"
import Walmart from "../../../assets/images/companies/Walmart.svg"
import FedEx from "../../../assets/images/companies/FedEx.svg"

import "./header.scss";
import Button from "../../Button";

function Header() {


  return (
    <>
      <section className="header">

        <div className="background_blur">
          <div className="blur_top"></div>
          <div className="blur_bot"></div>
        </div>

        <div className="header_intro">
          <div className="intro_center">
            <h1 className="header_title header_title_studio">Professionele presentaties die indruk maken</h1>
            <p className="header_text">Buddii creëert op maat gemaakte presentaties die visueel én inhoudelijk imponeren. We ontwikkelen nieuwe presentaties of vertrekken van bestaande content.</p>
          </div>
          <div className="header_buttons">
            <Button text="Get started" to="#" styling="primery" />
            <div className="button_arrowDown">
              <img src={arrowDown} className="arrowDown" alt="arrowDown" />
            </div>
          </div>
        </div>
        <div className="header_image header_image_studio">
          <img src={stripeLeft} className="header_stripes_l_studio" alt="deco-strokes" />
          <div className="video_container">
            <video className="video_box" width="auto" height="auto" mute="true" loop autoPlay>
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <img src={stripeRechts} className="header_stripes_r" alt="deco-strokes" />
        </div>
        <div className="banner_companies">
          <div className="box_companie">
            <img className="img_companie" src={airbnb} alt="airbnb logo" />
          </div>
          <div className="box_companie">
            <img className="img_companie" src={hubspot} alt="hubspot logo" />
          </div>
          <div className="box_companie">
            <img className="img_companie" src={google} alt="google logo" />
          </div>

          <div className="box_companie">
            <img className="img_companie" src={Microsoft} alt="Microsoft logo" />
          </div>
          <div className="box_companie">
            <img className="img_companie" src={Walmart} alt="Walmart logo" />
          </div>
          <div className="box_companie">
            <img className="img_companie" src={FedEx} alt="FedEx logo" />
          </div>
        </div>

      </section>

    </>
  );
}

export default Header;
