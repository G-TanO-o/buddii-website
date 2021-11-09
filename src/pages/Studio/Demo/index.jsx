import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../../components/Studio/HeaderDemo";
import DropDown from "../../../components/Default/DropDown";
import Company from "./company-icon.svg";

import './Demo.scss';

function Demo() {
  const [uur, setUur] = useState();

  let history = useHistory();

  const handleForm = event => {
    event.preventDefault();
    history.push("/congrats");
  }

  const options = [
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
    <article>
      <Header />

      <section className="demo_container">
        <h1 className="demo_title">Vervolledig je afspraak</h1>
        <h2 className="demo_subtitle">Meeting detials</h2>

        <form className="demo_form" onSubmit={(e) => handleForm(e)}>
          <div className="demo_form_grid">
            <label htmlFor="" className="demo_form_label">Uur
              <DropDown options={options} onChange={(e) => setUur(e)} placeholder="Uur:" />
            </label>

            <label htmlFor="" className="demo_form_label">Datum
              <input type="text" className="demo_form_input" />
            </label>

            <label htmlFor="" className="demo_form_label">Naam - Voornaam
              <input type="text" className="demo_form_input" />
            </label>

            <label htmlFor="bedrijf" className="demo_form_label">Naam bedrijf
              <img src={Company} alt="bedrijf" width="24" />
              <input type="text" name="bedrijf" id="bedrijf" className="demo_form_input demo_input-icon" />
            </label>

            <label htmlFor="" className="demo_form_label">Telefoon
              <input type="text" className="demo_form_input" />
            </label>

            <label htmlFor="" className="demo_form_label">E-mailadres
              <input type="email" className="demo_form_input" />
            </label>
          </div>

          <input type="submit" value="Submit appoitment" className="demo_form_button" />
        </form>
      </section>
    </article>
  );
}

export default Demo;