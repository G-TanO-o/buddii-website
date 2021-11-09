import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "./data.json";
import Demo from "../../../components/Studio/Form";
import Header from "../../../components/Studio/HeaderCases";
import PageNotFound from "../../../components/Studio/PageNotFound";

import './Cases.scss'

function Cases() {
  const { id } = useParams();
  const [caseobj, setCaseobject] = useState();

  const getData = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        setCaseobject(data[i])
      }
    }
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  useEffect(() => {
    getData()
  }, [id]);

  return (
    <article>
      {caseobj ? (
        <>
          <Header data={caseobj} />

          <section className="case_text_content">
            <div className="case_text_box">
              <h1 className="case_text_box_title">Bedrijf</h1>
              {caseobj.bedrijf.map((text, index) => (
                <p key={index} className="case_text_box_text">{text}</p>
              ))}
            </div>
            <div className="case_text_box">
              <h1 className="case_text_box_title">Nood</h1>
              {caseobj.nood.map((text, index) => (
                <p key={index} className="case_text_box_text">{text}</p>
              ))}
            </div>
          </section>

          <Demo />

          <section className="case_cases">
            <h1 className="case_cases_title">Recente case studies</h1>
            <div>
              <Link to="/cases/1">
                <img src={data[0].img} alt={data[0].title} width="350" height="350" />
                <h2>{data[0].title}</h2>
                <p>{data[0].Sector}</p>
              </Link>
              <Link to="/cases/2">
                <img src={data[1].img} alt={data[1].title} width="350" height="350" />
                <h2>{data[1].title}</h2>
                <p>{data[1].Sector}</p>
              </Link>
              <Link to="/cases/3">
                <img src={data[2].img} alt={data[2].title} width="350" height="350" />
                <h2>{data[2].title}</h2>
                <p>{data[2].Sector}</p>
              </Link>
            </div>
          </section>
        </>
      ) :
        (
          <PageNotFound item="Case" />
        )}
    </article>
  );
}

export default Cases;