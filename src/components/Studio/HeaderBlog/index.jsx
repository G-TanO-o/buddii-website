import React from "react";
import stripeLeft from "../../../assets/images/strokes-links.svg"
import stripeRechts from "../../../assets/images/strokes-rechts.svg"
import Card from "./cards";

import "./HeaderPricing.scss";


function HeaderBlog() {

  return (
    <section className="header_pricing_container">
      <div className="header_intro">
        <div className="background_blur">
          <div className="blur_top"></div>
          <div className="blur_bot"></div>
        </div>

        <div className="pricing_header">
          <h1 className="header_title">Blog</h1>
          <p className="pricing_text">Buddii creëert op maat gemaakte presentaties die visueel én inhoudelijk imponeren. We ontwikkelen nieuwe presentaties of vertrekken van bestaande content. </p>
        </div>
      </div>
      <div className="header_image">
        <img src={stripeLeft} className="header_stripes_l" alt="deco-strokes" />
        <div className="cards">
          <Card img="https://i.postimg.cc/gcH0G7sj/foto1.jpg" title="3 Tips voor een goede presentatie" slug="highlighted" date="10 AUG 21" />
          <Card img="https://i.postimg.cc/L6485VQT/foto2.jpg" title="3 Tips voor een goede presentatie" slug="highlighted" date="21 AUG 21" />
          <Card img="https://i.postimg.cc/nrhfF3V9/foto3.jpg" title="3 Tips voor een goede presentatie" slug="highlighted" date="30 AUG 21" />
        </div>
        <img src={stripeRechts} className="header_stripes_r" alt="deco-strokes" />
      </div>
    </section>
  );
}

export default HeaderBlog;
