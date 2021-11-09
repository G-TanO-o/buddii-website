import React, { useState } from "react";

import stripeLeft from "../../../assets/images/strokes-links.svg"
import stripeRechts from "../../../assets/images/strokes-rechts.svg"
import Calender from "../../Default/Calendar";
import DropDown from "../../Default/DropDown";

import "./header.scss"

function HeaderDemo() {
  const [page, setPage] = useState('')

  const options2 = [
    {
      label: "01:00",
      value: "01:00"
    },
    {
      label: "02:00",
      value: "02:00"
    },
    {
      label: "03:00",
      value: "03:00"
    },
    {
      label: "04:00",
      value: "04:00"
    },
    {
      label: "05:00",
      value: "05:00"
    },
    {
      label: "06:00",
      value: "06:00"
    },
    {
      label: "07:00",
      value: "07:00"
    },
    {
      label: "08:00",
      value: "08:00"
    },
    {
      label: "09:00",
      value: "09:00"
    },
    {
      label: "10:00",
      value: "10:00"
    },
    {
      label: "11:00",
      value: "11:00"
    },
    {
      label: "12:00",
      value: "12:00"
    },
    {
      label: "13:00",
      value: "13:00"
    },
    {
      label: "14:00",
      value: "14:00"
    },
    {
      label: "15:00",
      value: "15:00"
    },
    {
      label: "16:00",
      value: "16:00"
    },
    {
      label: "17:00",
      value: "17:00"
    },
    {
      label: "18:00",
      value: "18:00"
    },
    {
      label: "19:00",
      value: "19:00"
    },
    {
      label: "20:00",
      value: "20:00"
    },
    {
      label: "21:00",
      value: "21:00"
    },
    {
      label: "22:00",
      value: "22:00"
    },
    {
      label: "23:00",
      value: "23:00"
    },
    {
      label: "00:00",
      value: "00:00"
    }
  ]

  return (
    <>
      <section className="header">

        <div className="background_blur">
          <div className="blur_top"></div>
          <div className="blur_bot"></div>
        </div>

        <div className="header_intro">
          <div className="intro_center">
            <h1 className="header_title headerofferte_title_studio">Start met Buddii studio</h1>
          </div>
        </div>
        <div className="header_image headerdemo_image_studio">
          <img src={stripeLeft} className="header_stripes_l_studio" alt="deco-strokes" />
          <div className="demo_calender">
            <Calender />
            <h2 className="demo_header_title">Kies een uur</h2>
            <DropDown options={options2} className="uur" onChange={(e) => setPage(e)} placeholder="Uur:" />
          </div>
          <img src={stripeRechts} className="header_stripes_r_offerte demo_header_strips_r" alt="deco-strokes" />
        </div>
      </section>

    </>
  );
}

export default HeaderDemo;
