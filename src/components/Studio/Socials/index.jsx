import React from "react";
import FB from "./fb.svg"
import Google from "./google.svg"
import Instagram from "./instagram.svg"
import User from "./user.svg"

import "./socials.scss";

function Socials() {


  return (
    <div className="social_container">
      <h2 className="social_title">Where did you find us?</h2>
      <div className="social_grid">
        <div className="social_link">
          <img src={Instagram} alt="Instagram" />
          <p className="social_link_text">Instagram</p>
        </div>

        <div className="social_link">
          <img src={Google} alt="Google" />
          <p className="social_link_text">Google</p>
        </div>

        <div className="social_link">
          <img src={FB} alt="FB" />
          <p className="social_link_text">Facebook</p>
        </div>

        <div className="social_link">
          <img src={User} alt="User" />
          <p className="social_link_text">Referal</p>
        </div>

        <div className="social_link">
          <p className="social_link_text">Other</p>
        </div>
      </div>
    </div>
  );
}

export default Socials;
