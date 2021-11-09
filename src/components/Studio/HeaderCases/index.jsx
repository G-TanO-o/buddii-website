import React from "react";
import Carousel from "../Carousel";
import stripeLeft from "../../../assets/images/strokes-links.svg"
import stripeRechts from "../../../assets/images/strokes-rechts.svg"

import "./headercases.scss"

function HeaderCases({ data }) {

  return (
    <>
      <section className="header">

        <div className="background_blur">
          <div className="blur_top"></div>
          <div className="blur_bot"></div>
        </div>

        <div className="header_intro_case">
          <div className="intro_center">
            <h1 className="header_title headercase_title_studio">{data.title}</h1>
          </div>
        </div>
        <div className="header_image">
          <img src={stripeLeft} className="header_stripes_l_studio" alt="deco-strokes" />
          <div className="header_caseinfo">
            <Carousel data={data.sliders} />

            <div className="header_caseinfo_pijlers">
              <p>Bedrijf: <span>{data.Bedrijf}</span></p>
              <p>Sector: <span>{data.Sector}</span></p>
              <p>Oplossing: <span>{data.Oplossing}</span></p>
            </div>
          </div>
          <img src={stripeRechts} className="header_stripes_r_offerte" alt="deco-strokes" />
        </div>
      </section>

    </>
  );
}

export default HeaderCases;
