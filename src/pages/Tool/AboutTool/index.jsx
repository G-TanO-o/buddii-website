import React from "react";

import Header from "../../../components/Tool/Header";
import Powerpoint from "../../../components/Tool/Powerpoint";
import BuddiiData from "../../../components/Tool/BuddiiData";
import Headline from "../../../components/Tool/Headline";
import AppFeatures from "../../../components/Tool/AppFeatures";
import AppCTA from "../../../components/Tool/AppCTA";


import "./aboutTool.scss";

function AboutTool() {

  return (
    <>
      <article className="home">
        <h1 className="hidden">home</h1>
        <Header />
        <Powerpoint />
        <BuddiiData />
        <Headline />
        <AppFeatures />
        <AppCTA />
      </article>
    </>
  );
}

export default AboutTool;
