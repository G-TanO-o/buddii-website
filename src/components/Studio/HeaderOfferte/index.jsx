import React from "react";

import stripeLeft from "../../../assets/images/strokes-links.svg"
import stripeRechts from "../../../assets/images/strokes-rechts.svg"
import offerte_header from "./offerte_header.png";

import "./header.scss";

function HeaderOfferte() {


  return (
    <>
      <section className="header offerte_header">
        <div className="background_blur">
          <div className="blur_top"></div>
          <div className="blur_bot"></div>
        </div>

        <div className="header_intro">
          <div className="intro_center">
            <h1 className="header_title headerofferte_title_studio">Start met Buddii studio</h1>
          </div>
        </div>
        <div className="header_image headerofferte_image_studio">
          <img src={stripeLeft} className="header_stripes_l_studio" alt="deco-strokes" />
          <img src={offerte_header} className="offerte_img" />
          <img src={stripeRechts} className="header_stripes_r_offerte" alt="deco-strokes" />
        </div>
      </section>

    </>
  );
}

export default HeaderOfferte;
