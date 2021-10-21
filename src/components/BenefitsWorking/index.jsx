import React, {useRef, useEffect, useState} from "react";

import make from "../../assets/images/powerpoint/make.svg";

import "./benefitsWorking.scss";

function BenefitsWorking() {
  
  return (
    <>
      <section className="benefitsWorking">
        <div className="benefitsWorking_box">
          <div className="boxtext">
            <h1 className="title">Benefits of working with us</h1>
            <div className="benefits_grid">
              {/* item */}
              <div className="item">
                <div className="img_box">
                  <img className="img" src={make} alt="" />
                </div>
                <div className="boxtext">
                  <p className="item_title">Headline</p>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.</p>
                </div>
              </div>
              {/* end */}
              {/* item */}
              <div className="item">
                <div className="img_box">
                  <img className="img" src={make} alt="" />
                </div>
                <div className="boxtext">
                  <p className="item_title">Headline</p>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.</p>
                </div>
              </div>
              {/* end */}
              {/* item */}
              <div className="item">
                <div className="img_box">
                  <img className="img" src={make} alt="" />
                </div>
                <div className="boxtext">
                  <p className="item_title">Headline</p>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.</p>
                </div>
              </div>
              {/* end */}
              {/* item */}
              <div className="item">
                <div className="img_box">
                  <img className="img" src={make} alt="" />
                </div>
                <div className="boxtext">
                  <p className="item_title">Headline</p>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.</p>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BenefitsWorking;
