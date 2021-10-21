import React, {useRef, useEffect, useState} from "react";

import Header from "../../components/Header";
import Powerpoint from "../../components/Powerpoint";
import BuddiiData from "../../components/BuddiiData";
import Headline from "../../components/Headline";
import AppFeatures from "../../components/AppFeatures";
import AppCTA from "../../components/AppCTA";


import "./home.scss";

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <article className="home">
      <h1 className="hidden">home</h1>
      {/* <Nav /> */}
      <Header />
      <Powerpoint />
      <BuddiiData />
      <Headline />
      <AppFeatures />
      <AppCTA />
      {/* <Footer /> */}
    </article>
    </>
  );
}

export default Home;
