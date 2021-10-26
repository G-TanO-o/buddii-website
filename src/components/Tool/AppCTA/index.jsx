import React from "react";

import appStore from "../../../assets/images/AppStore.svg";
import googlePlay from "../../../assets/images/GooglePlay.png";
import appPhones from "../../../assets/images/phones.png";

import "./appCTA.scss";

function AppCTA() {

  return (
    <>
      <section className="cta_app">
        <div className="cta_app_box">
          <div className="app_box">
            <h1 className="title">Manage your projects from your mobile</h1>
            <p className="text">Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!</p>
            <div className="download_buttons">
              <p className="">Get the App</p>
              <div className="ctaDownload">
                <a className="appstore" href="/">
                  <img src={appStore} alt="appStore" />
                </a>
                <a href="/">
                  <img src={googlePlay} alt="googleplay" />
                </a>
              </div>
            </div>
          </div>
          <div className="img_box">
            <img className="phones" src={appPhones} alt="appPhoes" />
          </div>
        </div>
      </section>
    </>
  );
}

export default AppCTA;
