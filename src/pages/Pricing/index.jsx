import React from "react";
import Header from "../../components/HeaderPricing"
import Features from "../../components/Features";
import "./Pricing.scss"
import "./Slider.scss"

function Pricing() {
  return (
    <article>
      <h1 className="hidden">Pricing</h1>
      <Header />

      <Features />

      <section className="pricig_quest">
        <h1 className="hidden">Q&amp;A</h1>
        <p className="question">Live track your suppliers &amp; representatives</p>
        <p className="question">Get detailed info about metrics</p>
        <p className="question">Crash detection</p>
      </section>
    </article>
  );
}

export default Pricing;
