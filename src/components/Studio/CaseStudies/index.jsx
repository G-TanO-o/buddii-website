import React from "react";
import Button from "../../Button";
import Cover from './project_cover.png';
import Cover2 from './project_cover2.png';
import Cover3 from './project_cover3.png';
import Cover4 from './project_cover4.png';
import Cover5 from './project_cover5.png';
import Cover6 from './project_cover6.png';

import './CaseStudies.scss'

function CaseStudies() {

  return (
    <section className="caseStudies">
      <div className="caseStudies_case">
        <h1>Case studies</h1>
        <img src={Cover} alt="Cover" />
        <h2>Talenco</h2>
        <p>Talenco innoveert industriële oplossingen. Buddii innoveerde Talenco’s bedrijfspresentatie. </p>
      </div>

      <div className="caseStudies_case">
        <img src={Cover2} alt="Cover2" />
        <h2>Pomton</h2>
        <p>Pomton zorgt voor de juiste mix van pompelmoes en tonic in een blikje. Wij maakten hun salespresentatie even dynamisch dan deze premium frisdrank.</p>
      </div>

      <div className="caseStudies_case">
        <img src={Cover3} alt="Cover3" />
        <h2>RSCA</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
      </div>

      <div className="caseStudies_case">
        <img src={Cover4} alt="Cover4" />
        <h2>Dereymaeker NV</h2>
        <p>Dereymaeker NV stelt verzekeringspakketten op maat samen voor hun klanten en vond in Buddii een geschikte partner om hun bedrijfspresentatie op maat te creëren. </p>
      </div>

      <div className="caseStudies_case">
        <img src={Cover5} alt="Cover5" />
        <h2>The Island</h2>
        <p>The Island is een Belgisch award winning agency en vaste digitale partner van impactvolle bedrijven. Wij zijn blij hun vaste partner te zijn voor de ontwikkeling van dynamische productpresentaties. </p>
      </div>

      <div className="caseStudies_case">
        <img src={Cover6} alt="Cover6" />
        <h2>De Mensen</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at. </p>

        <Button text="View all case studies" to="/cases" />
      </div>
    </section>
  );
}

export default CaseStudies;