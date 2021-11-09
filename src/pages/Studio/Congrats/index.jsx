import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Confetti from "react-confetti";
import Button from "../../../components/Button";

import "./Congrats.scss";

function Congrats() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <section className="congrats_container">
      <Confetti
        numberOfPieces={50}
        width={width}
        height={height}
      />
      <h1 className="congrats_title">Dankuwel</h1>
      <p className="congrats_text">Het formulier is goed verzonden</p>
      <p className="congrats_check">Gelieven uw mail na te kijk</p>
      <Button text="HOMEPAGE" to="/studio" styling="primery" />
    </section>
  );
}

export default Congrats;
