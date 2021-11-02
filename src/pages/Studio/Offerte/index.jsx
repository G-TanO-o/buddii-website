import React from "react";

import './Offerte.scss';
import HeaderOfferte from "../../../components/Studio/HeaderOfferte"
import Socials from "../../../components/Studio/Socials"

function Offerte() {

  return (
    <article>
      <HeaderOfferte />

      <section className="offerte_container">
        <h1 className="offerte_title">Simuleer hier je offerte</h1>
        <h2 className="offerte_subtitle">Company details</h2>

        <form action="" className="offerte_form">
          <div className="offerte_form_grid">
            <label htmlFor="Company" className="offerte_form_label">Company Name
              <input type="text" name="Company" id="Company" className="offerte_form_input" />
            </label>

            <label htmlFor="Employees" className="offerte_form_label">Employees
              <input type="text" name="Employees" id="Employees" className="offerte_form_input" />
            </label>

            <label htmlFor="VAT" className="offerte_form_label">VAT number
              <input type="text" name="VAT" id="VAT" className="offerte_form_input" />
            </label>

            <label htmlFor="Sector" className="offerte_form_label">Sector
              <input type="text" name="Sector" id="Sector" className="offerte_form_input" />
            </label>

            <label htmlFor="website" className="offerte_form_label">Company website *
              <input type="text" name="website" id="website" className="offerte_form_input" />
            </label>

            <label htmlFor="Country" className="offerte_form_label">Country
              <input type="text" name="Country" id="Country" className="offerte_form_input" />
            </label>

            <label htmlFor="SKU" className="offerte_form_label">SKU’s
              <input type="text" name="SKU" id="SKU" className="offerte_form_input" />
            </label>

            <Socials />
          </div>

          <input type="submit" value="Finish" className="offerte_form_button" />
        </form>
      </section>
    </article>
  );
}

export default Offerte;