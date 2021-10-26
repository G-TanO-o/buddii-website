import React, { useState } from "react";

import make from "../../../assets/images/powerpoint/make.svg";
import dashboard from "../../../assets/image.png";
import dashboard2 from "../../../assets/image2.png";
import dashboard3 from "../../../assets/image3.png";
import dashboard4 from "../../../assets/image4.png";

import "./appFeatures.scss";

function AppFeatures() {
  const [photoUrl, setPhotoUrl] = useState(dashboard)
  const [activeFeature, setActiveFeature] = useState(1)

  const handlePhotoUrl = (url, num) => {
    setPhotoUrl(url)
    setActiveFeature(num)
  }

  return (
    <>
      <section className="appFeature">
        <div className="appFeature_box">
          <div className="boxtext">
            <h1 className="title">app features</h1>
            <div className="items items_hover" onMouseEnter={() => handlePhotoUrl(dashboard, 1)} onClick={() => handlePhotoUrl(dashboard, 1)}>
              <div className="item">
                <div className="img_box">
                  <img className="img" src={make} alt="" />
                </div>
                <div className="boxtext">
                  <div className={activeFeature === 1 ? "item_title_active" : "item_title"}>Shared agenda</div>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.</p>
                </div>
              </div>
            </div>
            <div className="items items_hover" onMouseEnter={() => handlePhotoUrl(dashboard2, 2)} onClick={() => handlePhotoUrl(dashboard2, 2)}>
              <div className="item">
                <div className="img_box">
                  <img className="img" src={make} alt="" />
                </div>
                <div className="boxtext">
                  <div className={activeFeature === 2 ? "item_title_active" : "item_title"}>Task manager</div>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit morbi a, mi egestas eu amet mauris adipiscing.</p>
                </div>
              </div>
            </div>
            <div className="items items_hover" onMouseEnter={() => handlePhotoUrl(dashboard3, 3)} onClick={() => handlePhotoUrl(dashboard3, 3)}>
              <div className="item">
                <div className="img_box">
                  <img className="img" src={make} alt="" />
                </div>
                <div className="boxtext">
                  <div className={activeFeature === 3 ? "item_title_active" : "item_title"}>Geo planning</div>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida blandit volutpat sagittis sed.</p>
                </div>
              </div>
            </div>
            <div className="items items_hover" onMouseEnter={() => handlePhotoUrl(dashboard4, 4)} onClick={() => handlePhotoUrl(dashboard4, 4)}>
              <div className="item">
                <div className="img_box">
                  <img className="img" src={make} alt="" />
                </div>
                <div className="boxtext">
                  <div className={activeFeature === 4 ? "item_title_active" : "item_title"}>Data report</div>
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
