import React, { useState } from "react";
import Button from "../../Button";
import Slider from "../Carousel";
import arrowDown from "../../../assets/images/arrow-down.svg"
import "./HeaderSolutions.scss";

function HeaderSolutions({ data }) {

  return (
    <>
      <section className="header_solution">
        <div className="header_solution_container">
          <div className="header_solution_boxtext">
            <h1 className="header_solution_title">{data.title}</h1>
            <p className="header_solution_text">{data.intro}</p>

            <div className="header_buttons">
              <Button text="Get started" to="#" styling="primery" />
              <div className="button_arrowDown">
                <img src={arrowDown} className="arrowDown" alt="arrowDown" />
              </div>
            </div>
          </div>
          <div className="header_solutions_slider">
            <Slider data={data.sliders} />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderSolutions;
