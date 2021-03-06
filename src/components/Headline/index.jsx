import React, {useRef, useEffect, useState} from "react";

import PhoneMockup from "../../assets/images/PhoneMockup.jpg";
import arrowRight from "../../assets/images/right-arrow.svg"
import Button from "../Button";


import "./headline.scss";

function Headline() {
  
  return (
    <>
        <section className="headline">
          <div className="headline_box">
            <div className="headline_box_img">
                <img className="headline_img" src={PhoneMockup} alt="" />
            </div>
            <div className="headline_textbox">
                <h1 className="headline_title" >headline</h1>
                <p className="headline_text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>
                <Button text="Get testing" to="#" style="second" />

            </div>
          </div>
        </section>
    </>
  );
}

export default Headline;
