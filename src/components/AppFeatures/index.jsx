import React, {useRef, useEffect, useState} from "react";

import make from "../../assets/images/powerpoint/make.svg";
import dashboard from "../../assets/images/dashboard.png";

import "./appFeatures.scss";

function AppFeatures() {
  
  return (
    <>
        <section className="appFeature">
          <div className="appFeature_box">
            <div className="boxtext">
              <h1 className="title">app features</h1>
              <div className="items">
                <div className="item">
                  <div className="img_box">
                    <img className="img" src={make} alt="" />
                  </div>
                  <div className="boxtext">
                    <p className="item_title">Headline</p>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.</p>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="item">
                  <div className="img_box">
                    <img className="img" src={make} alt="" />
                  </div>
                  <div className="boxtext">
                    <p className="item_title">Headline</p>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.</p>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="item">
                  <div className="img_box">
                    <img className="img" src={make} alt="" />
                  </div>
                  <div className="boxtext">
                    <p className="item_title">Headline</p>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.</p>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="item">
                  <div className="img_box">
                    <img className="img" src={make} alt="" />
                  </div>
                  <div className="boxtext">
                    <p className="item_title">Headline</p>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img className="img_dashbord" src={dashboard} alt="" />
            </div>
          </div>
        </section>
    </>
  );
}

export default AppFeatures;
