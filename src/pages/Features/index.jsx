import React, {useRef, useEffect, useState} from "react";

import AppFeatures from "../../components/AppFeatures";
import BenefitsWorking from "../../components/BenefitsWorking";
import ServicesConnect from "../../components/ServicesConnect";


import "./features.scss";

function Features() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <article className="features">
      <h1 className="hidden">features</h1>
      <AppFeatures />
      <BenefitsWorking />
      <ServicesConnect />
    </article>
    </>
  );
}

export default Features;
