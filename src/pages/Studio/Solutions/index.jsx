import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import Header from "../../../components/Studio/HeaderSolutions"
import PageNotFound from "../../../components/Studio/PageNotFound";

import Step1 from "./step1.svg";
import Step2 from "./step2.svg";
import Step3 from "./step3.svg";
import Step4 from "./step4.svg";

import './Solutions.scss'

function Solutions() {
  const { id } = useParams();
  const [solution, setSolution] = useState();

  const getData = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        setSolution(data[i])
      }
    }
  }

  useEffect(() => {
    getData()
  }, [id]);

  return (
    <article>
      {solution ? (
        <>
          <Header data={solution} />
          <section className="solutions_aanpak">
            <h1 className="solutions_aanpak_title">Onze aanpak</h1>
            <div className="solutions_aanpak_steps">
              <div className="solutions_aanpak_line">
                <span></span>
              </div>
              <div className="solutions_aanpak_step">
                <div>
                  <img src={Step1} alt="Step1" />
                </div>
                <h2>Get to know</h2>
                <p>{solution.step1}</p>
              </div>

              <div className="solutions_aanpak_step">
                <div>
                  <img src={Step2} alt="Step2" />
                </div>
                <h2>verkoopstructuur</h2>
                <p>{solution.step2}</p>
              </div>

              <div className="solutions_aanpak_step">
                <div>
                  <img src={Step3} alt="Step3" />
                </div>
                <h2>Demo & feedback</h2>
                <p>{solution.step3}</p>
              </div>

              <div className="solutions_aanpak_step">
                <div>
                  <img src={Step4} alt="Step4" />
                </div>
                <h2>Afwerking</h2>
                <p>{solution.step4}</p>
              </div>
            </div>
          </section>

          <section className="solutions_info">
            <div>
              <h1>{solution.subtitle}</h1>
              {solution.text.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <img src={solution.img} alt={solution.title} width="540" height="540" />
          </section>
        </>
      ) : (
        <PageNotFound item="Solution" />
      )}

    </article>
  );
}

export default Solutions;