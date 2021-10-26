import React from "react";

import stripeLeft from "../../assets/images/strokes-links.svg"
import stripeRechts from "../../assets/images/strokes-rechts.svg"
import headerImage from "../../assets/images/header-img.png"
import arrowDown from "../../assets/images/arrow-down.svg"
import airbnb from "../../assets/images/companies/Airbnb.svg"
import google from "../../assets/images/companies/Google.svg"
import hubspot from "../../assets/images/companies/Hubspot.svg"
import Microsoft from "../../assets/images/companies/Microsoft.svg"
import Walmart from "../../assets/images/companies/Walmart.svg"
import FedEx from "../../assets/images/companies/FedEx.svg"

import "./header.scss";
import Button from "../Button";

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
            <h1 className="header_title">The beste tool for business to business.</h1>
            <p className="header_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit aliquam placerat sed turpis. Elit at non a egestas es thi gronas il ptonto.</p>
          </div>
          <div className="header_buttons">
            <Button text="Get started" to="#" styling="primery" />
            <div className="button_arrowDown">
              <img src={arrowDown} className="arrowDown" alt="arrowDown" />
            </div>
          </div>
        </div>
        <div className="header_image">
          <img src={stripeLeft} className="header_stripes_l" alt="deco-strokes" />
          <div>
            <img src={headerImage} className="header_img" alt="laptop-buddii" />
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
