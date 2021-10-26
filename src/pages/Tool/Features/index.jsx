import React from "react";

import AppFeatures from "../../../components/Tool/AppFeatures";
import BenefitsWorking from "../../../components/Tool/BenefitsWorking";
import ServicesConnect from "../../../components/Tool/ServicesConnect";
import BuddiiToday from "../../../components/Tool/BuddiiToday";

import "./features.scss";

function Features() {

  return (
    <>
      <article className="features">
        <h1 className="hidden">features</h1>
        <AppFeatures />
        <BenefitsWorking />
        <ServicesConnect />
        <BuddiiToday />
      </article>
    </>
  );
}

export default Features;