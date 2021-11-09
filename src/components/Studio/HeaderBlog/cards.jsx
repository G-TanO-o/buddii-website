import React from "react";
import "./Cards.scss"

function cards({ title, slug, date, img }) {

  return (
    <div className="blog_card">
      <img src={img} alt={slug} width="260" height="194" />
      <p className="card_slug">{slug}</p>
      <h2 className="card_title">{title}</h2>
      <span className="card_date">{date}</span>
    </div>
  );
}

export default cards;
