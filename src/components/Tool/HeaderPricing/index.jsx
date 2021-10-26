import React, { useState } from "react";
import stripeLeft from "../../assets/images/strokes-links.svg"
import stripeRechts from "../../assets/images/strokes-rechts.svg"
import Card from "./cards";

import "./HeaderPricing.scss";


function HeaderPricing() {
  const [test, setTest] = useState(0);

  const data = [
    { name: "Customers", check: true },
    { name: "Agenda", check: true },
    { name: "Routeplanner", check: true },
    { name: "Search", check: true },
    { name: "Add", check: true },
    { name: "Inteligent presentation", check: true },
    { name: "orders", check: true },
  ]

  return (
    <>
      <section className="header_pricing_ccontainer">

        <div className="header_intro">
          <div className="pricing_header">
            <h1 className="pricing_title">Simple, straightforward pricing.</h1>
            <p className="pricing_text">Choose the plan that's right for your brand. Whether you're just getting started with email marketing or you're personalizing every campaign, there's a plan for you.</p>
            <p className="pricing_value">With your list of <span className="pricing_valuetext">{test}</span> contacts, wee've got the right plan for you.</p>
            <div className="pricing_sliderdiv">
              <input
                type="range"
                name="slider"
                step={1}
                value={test}
                min={0}
                max={1000}
                onChange={(e) => setTest(e.target.value)}
                className="pricing_slider"
              />
              <span className="pricing_sliderlink">meer dan 1000</span>
            </div>
          </div>
        </div>
        <div className="header_image">
          <img src={stripeLeft} className="header_stripes_l" alt="deco-strokes" />
          <div className="cards">
            <Card title="Basic" text="Start met het gebruiken van onze presentatie het aanmaken van klanten en meer." price="9" data={data} />
            <Card title="Unlimited" text="Perfect voor kleine tot middelgrote bedrijven." price="59,90" data={data} />
            <Card title="Premium" text="Voor grote bedrijven met een..." price="149,90" data={data} />
          </div>
          <img src={stripeRechts} className="header_stripes_r" alt="deco-strokes" />
        </div>
      </section>

    </>
  );
}

export default HeaderPricing;
