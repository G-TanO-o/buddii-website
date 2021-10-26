import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Calender from "../../components/Dashboard/Calendar/index";
import ClientList from "../../components/Dashboard/ClientList/index";
import ContactList from "../../components/Dashboard/ContactList/index";
import Products from "../../components/Dashboard/Products/index";
import SlideShow from "../../components/Dashboard/SlideShow/index";
import Task from "../../components/Dashboard/Task/index";
import RouteDay from "../../components/Dashboard/RouteDay/index";
import ContactDetails from "../../components/Dashboard/Details/ContactDetails/index";
import Logo from "./logo.png";
import OpeningHours from "../../components/Dashboard/Details/OpeningHours/index";

import "./dashboard.scss";

function Dashboard(props) {
  const [sideDetails, setSideDetails] = useState(false);

  let side = useRef(null);

  const sideOpen = () => {
    setSideDetails(true)

    gsap
      .fromTo(side.current, {
        autoAlpha: 1,
        x: 410,
        ease: 'none',
        delay: 0
      },
        {
          duration: .3,
          autoAlpha: 1,
          x: 0,
          ease: 'none',
          delay: 0
        })
  }

  const sideClose = async () => {
    await gsap
      .fromTo(side.current, {
        autoAlpha: 1,
        x: 0,
        ease: 'none',
        delay: 0
      },
        {
          duration: .3,
          autoAlpha: 1,
          x: 410,
          ease: 'none',
          delay: 0
        })

    setSideDetails(false)
  }

  useEffect(() => {
    if (sideDetails) {
      sideOpen()
    } else {
      sideClose()
    }
  }, [sideDetails]);

  return (
    <>
      <div className="grid">
        <Calender />
        <ClientList handelSide={() => sideOpen()} />
        <ContactList />
        <Products />
        <SlideShow />
        <Task />
        <RouteDay />
      </div>
      {sideDetails &&
        <div ref={side} className="c-side-details">
          <div style={{ padding: 30 }}>
            <div className="c-side-titlebox">
              <h2 className="c-side-title">Client Detail</h2>
              <p className="c-side-close" onClick={() => sideClose()}>close</p>
            </div>

            <div className="c-side-logobox">
              <img src={Logo} className="c-side-logo" />
              <div>
                <h3 className="c-side-subtitle">Hubo Edegem</h3>
                <p className="c-side-adress">Drie Eikrnstraar 510</p>
                <p className="c-side-adress">2650 Edegem</p>
                <p className="c-side-adress">Email: contact@sajon.co</p>
              </div>
            </div>

            <div>
              <p className="c-side-addclient">Add  A New Client</p>
            </div>

            <ContactDetails />

            <OpeningHours />
          </div>
        </div>
      }
    </>
  );
}

export default Dashboard;
