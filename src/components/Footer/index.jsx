import React, {useRef, useEffect, useState} from "react";

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
                <p className="">Download now</p>
                <p className="">License</p>
              </div>
              <div className="pages">
                <p className="">aboout</p>
                <p className="">features</p>
                <p className="">pricing</p>
                <p className="">careers</p>
                <p className="">help</p>
                <p className="">privacy policy</p>
              </div>
            </div>
            <div className="">
              <p className="getApp">Get the app</p>
              <div className="ctaDownload">
                  <a className="appstore" href="">
                    <img className="" src={appStore} alt="" />
                  </a>
                  <a className="" href="">
                    <img className="" src={googlePlay} alt="" />
                  </a>
                </div>
            </div>
          </div>
          <p className="rights">© 2021 Buddii. All rights reserved</p>
        </footer>
    </>
  );
}

export default Footer;
