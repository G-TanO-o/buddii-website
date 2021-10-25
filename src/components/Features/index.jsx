import React from "react";
import Checked from "../../assets/images/checked.svg"
import NoChecked from "../../assets/images/nochecked.svg"
import "./Features.scss"

function Features() {
  const data = [
    { name: "Customers", checkBasic: true, checkUnlimited: true, checkPremium: true },
    { name: "Agenda", checkBasic: true, checkUnlimited: true, checkPremium: true },
    { name: "Routeplanner", checkBasic: false, checkUnlimited: true, checkPremium: true },
    { name: "Search ", checkBasic: false, checkUnlimited: true, checkPremium: true },
    { name: "Add ", checkBasic: false, checkUnlimited: false, checkPremium: true },
    { name: "Inteligent presentation", checkBasic: false, checkUnlimited: false, checkPremium: true },
    { name: "orders", checkBasic: false, checkUnlimited: false, checkPremium: true }
  ]
  return (
    <section className="feature_container">
      <h1 className="feature_title">main features</h1>
      <ul>
        {data.map((item, index) => (
          <li className="feature_item" key={index}>
            <p className="feature_item_name">{item.name}</p>
            <img src={item.checkBasic ? Checked : NoChecked} />
            <img src={item.checkUnlimited ? Checked : NoChecked} />
            <img src={item.checkPremium ? Checked : NoChecked} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Features;
