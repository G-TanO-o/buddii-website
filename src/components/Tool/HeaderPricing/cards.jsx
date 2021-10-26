import React from "react";
import Checked from "../../../assets/images/checked.svg"
import NoChecked from "../../../assets/images/nochecked.svg"
import "./Cards.scss"

function cards({ data, title, text, price }) {

  return (
    <div className="card">
      <h2 className="card_title">{title}</h2>
      <p className="card_text">{text}</p>
      <p className="card_price"><span className="card_price-num">&#8364;</span>{price}</p>
      <p className="card_time">per month</p>
      <button className="card_button">Get Started</button>

      <div className="card_features">
        <p className="card_seefeatures">see features +</p>
        <h3 className="card_maintitle">main features</h3>
        <ul>
          {data.map((item, index) => (
            <li key={index} className="card_item">
              <p className="card_itemname">{item.name}</p>
              <img className="card_itemimg" src={item.check ? Checked : NoChecked} alt="check mark" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default cards;
