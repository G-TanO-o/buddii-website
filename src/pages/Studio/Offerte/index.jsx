import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './Offerte.scss';
import HeaderOfferte from "../../../components/Studio/HeaderOfferte"
import DropDown from "../../../components/Default/DropDown";

import Company from "./company-icon.svg";

function Offerte() {
  const [page, setPage] = useState('')
  const [page2, setPage2] = useState('')
  const [page3, setPage3] = useState('')

  let history = useHistory();

  const handleForm = event => {
    event.preventDefault();
    history.push("/congrats");
  }

  const options = [
    {
      label: "Bedrijfspresentatie",
      value: "Bedrijfspresentatie"
    },
    {
      label: "Sales presentatie",
      value: "Sales presentatie"
    },
    {
      label: "Pitch presentatie",
      value: "Pitch presentatie"
    },
    {
      label: "Product presentatie",
      value: "Product presentatie"
    },
    {
      label: "Rapportage presentatie",
      value: "Rapportage presentatie"
    }
  ]

  const options2 = [
    {
      label: "Ja",
      value: "Ja"
    },
    {
      label: "Nee",
      value: "Nee"
    },
    {
      label: "Weet ik niet",
      value: "Weet ik niet"
    }
  ]

  const options3 = [
    {
      label: "1-15",
      value: "1-15"
    },
    {
      label: "15-20",
      value: "15-20"
    },
    {
      label: "20-35",
      value: "20-35"
    },
    {
      label: "+35",
      value: "+35"
    }
  ]

  return (
    <article>
      <HeaderOfferte />

      <section className="offerte_container">
        <h1 className="offerte_title">Simuleer hier je offerte</h1>
        <h2 className="offerte_subtitle">Company details</h2>

        <form action="" className="offerte_form" onSubmit={(e) => handleForm(e)}>
          <div className="offerte_form_grid">
            <label htmlFor="bedrijf" className="offerte_form_label">Naam bedrijf
              <img src={Company} alt="bedrijf" width="24" />
              <input type="text" name="bedrijf" id="bedrijf" className="offerte_form_input offerte_input-icon" />
            </label>

            <label htmlFor="programma" className="offerte_form_label">Naar welke soort presentatie bent u op zoek?
              <DropDown options={options} onChange={(e) => setPage(e)} placeholder="Select an option" />
            </label>

            <label htmlFor="geanimeerd" className="offerte_form_label">West u een geannimeerde presentatie?
              <DropDown options={options2} onChange={(e) => setPage2(e)} placeholder="Select an option" />
            </label>

            <label htmlFor="Sector" className="offerte_form_label">Uit hoeveel slides (indicatie) zal de presentatie bestaan?
              <DropDown options={options3} onChange={(e) => setPage3(e)} placeholder="Select an option" />
            </label>

            <label htmlFor="Naam" className="offerte_form_label">Naam
              <input type="text" name="Naam" id="Naam" className="offerte_form_input" />
            </label>

            <label htmlFor="email" className="offerte_form_label">E-mailadres
              <input type="email" name="email" id="email" className="offerte_form_input" />
            </label>

            <label htmlFor="voornaam" className="offerte_form_label">Voornaam
              <input type="text" name="voornaam" id="voornaam" className="offerte_form_input" />
            </label>

            <label htmlFor="telefoon" className="offerte_form_label">Telefoon
              <input type="text" name="telefoon" id="telefoon" className="offerte_form_input" />
            </label>
          </div>

          <input type="submit" value="Finish" className="offerte_form_button" />
        </form>
      </section>
    </article>
  );
}

export default Offerte;