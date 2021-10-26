import React from "react";

import Header from "../../../components/Header";
import Powerpoint from "../../../components/Powerpoint";
import BuddiiData from "../../../components/BuddiiData";
import Headline from "../../../components/Headline";
import AppFeatures from "../../../components/Tool/AppFeatures";
import AppCTA from "../../../components/AppCTA";


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
