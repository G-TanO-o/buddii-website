import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import stripeLeft from "../../../assets/images/strokes-links.svg"
import stripeRechts from "../../../assets/images/strokes-rechts.svg"

import './Contact.scss';

function Contact() {
  const position = [51.23162078857422, 4.410129547119141]

  return (
    <article>
      <div>
        <h1 className="contact_title">Contact us</h1>
      </div>
      <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <a href="https://www.theisland.be/" target="_blank">https://www.theisland.be/</a>
          </Popup>
        </Marker>
      </MapContainer>

      <div>
        <img className="lines_right_contact" src={stripeRechts} alt="deco-strokes" />
        <div className="contact_container">
          <div className="contact_info">
            <div className="contact_info_gegevens">
              <h2 className="contact_info_title">Adres</h2>
              <p className="contact_info_text">August Michiels Straat 10</p>
              <p className="contact_info_text">2000 Antwerpen, België</p>
            </div>

            <div className="contact_info_producties">
              <h2 className="contact_info_title">Gegevens</h2>
              <p className="contact_info_text">info@Buddii.be</p>
              <p className="contact_info_text">tel: 0498 38 30 92</p>
              <p className="contact_info_text">BTW-nr: 0756.938.015:</p>
            </div>
          </div>

          <form action="" className="contact_form">
            <label htmlFor="name">
              <input className="contact_form_input" type="text" name="name" id="name" placeholder="Name" />
            </label>

            <label htmlFor="email">
              <input className="contact_form_input" type="email" name="email" id="email" placeholder="Email" />
            </label>

            <textarea className="contact_form_textarea" name="" id="" cols="30" rows="10" placeholder="Message"></textarea>

            <input className="contact_form_submit" type="submit" value="Send email" />
          </form>
        </div>
        <img className="lines_left_contact" src={stripeLeft} alt="deco-strokes" />
      </div>
    </article>
  );
}

export default Contact;




