import React from "react";
import Button from "../../Button";
import Screen from "./screen.png";
import "./BuddiiToday.scss";

function BuddiiToday() {

  return (
    <section className="buddii-today">
      <div className="buddii-today-box">
        <h1 className="buddii-today-title">Get started with Buddii today.</h1>
        <Button text="Sign up for a free account" styling="second_black_noborder" />
        <img className="buddii-today-img" src={Screen} alt="Screen" />
      </div>
    </section>
  );
}

export default BuddiiToday;
