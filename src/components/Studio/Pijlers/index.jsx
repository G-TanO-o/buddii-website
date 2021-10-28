import React from "react";
import Bedrijf from '../../../assets/images/pijlers/bedrijf.jpg';
import Product from '../../../assets/images/pijlers/product.jpg';
import Sales from '../../../assets/images/pijlers/sales.jpg';

import './Pijlers.scss'

function Pijlers() {

  return (
    <section className="pijlers_container">
      <h1 className="hidden">pijlers</h1>
      <div className="pijlers_post">
        <div className="pijlers_post_content">
          <h1>Bedrijfspresentaties</h1>
          <p>80% Van de professionals geven aan dat ze hun focus verliezen tijdens het het bijwonen van een bedrijfspresentatie omdat deze visueel oninteressant is.</p>
          <p>Onze designers ontwikkelen bedrijfspresentaties die zowel inhoudelijk als visueel de aandacht trekken. We transformeren bestaande content om tot een krachtig design of creëren nieuwe verhaallijnen die jullie bedrijfspresentatie naar een hoger niveau brengt.</p>
        </div>
        <img src={Bedrijf} width="540" height="540" alt="bedrijf peresentatie" />
      </div>

      <div className="pijlers_post">
        <img src={Product} width="540" height="540" alt="product peresentatie" />
        <div className="pijlers_post_content">
          <h1>Productpresentaties</h1>
          <p>Het aantrekkelijk voorstellen van uw producten of diensten is belangrijk. Toch worden onoverzichtelijke promotiefolders, gedateerde brochures en statische pdf’s nog vaak gebruikt wanneer producten of diensten worden gevisualiseerd.</p>
          <p>Wat uw product of dienst ook is, onze designers concentreren zich op het vinden van uw unieke invalshoek, het verhaal waar u gepassioneerd over bent, en creëren op basis daarvan strategisch sterke productpresentaties die uw doelpubliek bijblijven.</p>
        </div>
      </div>

      <div className="pijlers_post">
        <div className="pijlers_post_content">
          <h1>Salespresentaties</h1>
          <p>Uw salespresentatie is wellicht het meest essentiële onderdeel van uw verkoopproces. Het is uw missie, verhaal, visitekaartje en bedrijfspersoonlijkheid, allemaal verenigd in een korte, overtuigende presentatie.</p>
          <p>Het verkopen van uw product of dienst is een passie. Wij geloven dat een salespresentatie minstens evenveel enthousiasme mag uitstralen. Daarom creëren op maat gemaakte  salespresentaties waarin inhoud en visuele elementen elkaar versterken met één doel voor ogen: het publiek overtuigen van jullie product, dienst of idee.</p>
        </div>
        <img src={Sales} width="540" height="540" alt="sales peresentatie" />
      </div>
    </section>
  );
}

export default Pijlers;
