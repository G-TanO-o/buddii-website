import React from "react";
import AppCTA from "../../../components/Tool/AppCTA";
import Header from "../../../components/Studio/Header";
import Pijlers from "../../../components/Studio/Pijlers";
import Form from "../../../components/Studio/Form";
import CaseStudies from "../../../components/Studio/CaseStudies";

function AboutUs() {

  return (
    <article>
      <h1 className="hidden">About us</h1>
      <Header />
      <Pijlers />
      <Form />
      <CaseStudies />
      <AppCTA />
    </article>
  );
}

export default AboutUs;
