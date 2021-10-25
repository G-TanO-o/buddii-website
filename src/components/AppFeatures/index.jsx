import React, { useRef, useEffect, useState } from "react";

import make from "../../assets/images/powerpoint/make.svg";
import dashboard from "../../assets/image.png";
import dashboard2 from "../../assets/image2.png";
import dashboard3 from "../../assets/image3.png";
import dashboard4 from "../../assets/image4.png";

import "./appFeatures.scss";

function AppFeatures() {
  const [photoUrl, setPhotoUrl] = useState(dashboard)

  const handlePhotoUrl = (url) => {
    setPhotoUrl(url)
  }

  return (
    <>
      <section className="appFeature">
        <div className="appFeature_box">
          <div className="boxtext">
            <h1 className="title">app features</h1>
            <div className="items" onMouseEnter={() => handlePhotoUrl(dashboard)}>
              <div className="item">
                <div className="img_box">
                  <img className="img" src={make} alt="" />
                </div>
                <div className="boxtext">
                  <p className="item_title">Shared agenda</p>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.</p>
                </div>
              </div>
            </div>
            <div className="items" onMouseEnter={() => handlePhotoUrl(dashboard2)}>
              <div className="item">
                <div className="img_box">
                  <img className="img" src={make} alt="" />
                </div>
                <div className="boxtext">
                  <p className="item_title">Task manager</p>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit morbi a, mi egestas eu amet mauris adipiscing.</p>
                </div>
              </div>
            </div>
            <div className="items" onMouseEnter={() => handlePhotoUrl(dashboard3)}>
              <div className="item">
                <div className="img_box">
                  <img className="img" src={make} alt="" />
                </div>
                <div className="boxtext">
                  <p className="item_title">Geo planning </p>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida blandit volutpat sagittis sed.</p>
                </div>
              </div>
            </div>
            <div className="items" onMouseEnter={() => handlePhotoUrl(dashboard4)}>
              <div className="item">
                <div className="img_box">
                  <img className="img" src={make} alt="" />
                </div>
                <div className="boxtext">
                  <p className="item_title">Data report</p>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu dolor, neque, sollicitudin proin.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="img_dashbord" src={photoUrl} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default AppFeatures;
