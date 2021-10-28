import React from "react";
import Button from '../../../components/Button'

import './Form.scss'

function Form() {

  return (
    <section className="form_container">
      <h1 className="form_title">Vraag een demo aan</h1>

      <form className="form">
        <label htmlFor="demo" className="form_label">
          <input type="checkbox" name="demo" id="demo" />
          Ik wil een vrijblijvende demo uitproberen
        </label>

        <label htmlFor="studio" className="form_label">
          <input type="checkbox" name="studio" id="studio" />
          Ik heb interesse in de mogelijkheden van jullie studio
        </label>

        <p className="form_text">Benieuwd of Buddii geschikt is voor jouw organisatie? Vraag ons om advies of ontdek het zelf met een demo van 14 dagen. Geef in het formulier aan waar je Buddii voor wilt inzetten zodat we een geschikte demo omgeving kunnen klaarzetten. Heb je direct een vraag? Bel ons via +31 (0) 76 543 08 52.</p>

        <div className="form_grid">
          <label htmlFor="Naam">
            <input className="form_input" type="text" name="Naam" id="Naam" placeholder="Naam" />
          </label>
          <label htmlFor="Bedrijfsnaam">
            <input className="form_input" type="text" name="Bedrijfsnaam" id="Bedrijfsnaam" placeholder="Bedrijfsnaam" />
          </label>
          <label htmlFor="Telefoonnummer">
            <input className="form_input" type="text" name="Telefoonnummer" id="Telefoonnummer" placeholder="Telefoonnummer" />
          </label>
          <label htmlFor="Email">
            <input className="form_input" type="email" name="Email" id="Email" placeholder="E-mail" />
          </label>
          <textarea className="form_textarea" name="" id="" cols="30" rows="10" placeholder="Naam"></textarea>
        </div>

        <Button text="Get started" to="#" styling="primery-black " />
      </form>
    </section>
  );
}

export default Form;