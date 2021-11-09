import React from "react";
import Button from "../../Button";
import "./PageNotFound.scss";

function PageNotFound({ item }) {
  console.log(item)
  return (
    <>
      <section className="notFound">
        <p className="notFound_404">404</p>
        <h1 className="notFound_title">{item} is niet gevonden</h1>
        <p className="notFound_text">de pagina die u zoekt is mogelijk verwijderd, van naam veranderd of tijdelijk niet beschikbaar.</p>
        <Button text="HOMEPAGE" to="/studio" styling="primery" />
      </section>
    </>
  );
}

export default PageNotFound;
