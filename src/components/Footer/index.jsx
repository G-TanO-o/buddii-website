import React, { useRef, useEffect, useState } from "react";

import appStore from "../../assets/images/AppStore.svg";
import googlePlay from "../../assets/images/GooglePlay.png";


import "./footer.scss";

function Footer() {

  return (
    <>
      <footer className="footer">
        <div className="placement_footer">
          <div className="">
            <h1 className="footer_logo">buddii</h1>
            <div className="pages">
              <p className="page-link">Download now</p>
              <p className="page-link">License</p>
            </div>
            <div className="pages">
              <p className="page-link">about</p>
              <p className="page-link">features</p>
              <p className="page-link">pricing</p>
              <p className="page-link">careers</p>
              <p className="page-link">help</p>
              <p className="page-link">privacy policy</p>
            </div>
            <p className="rights">© 2021 Buddii. All rights reserved</p>
          </div>
          <div className="">
            <p className="getApp">Get the app</p>
            <div className="footerDownload">
              <a className="appstore" href="">
                <img className="" src={appStore} alt="" />
              </a>
              <a className="" href="">
                <img className="" src={googlePlay} alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
