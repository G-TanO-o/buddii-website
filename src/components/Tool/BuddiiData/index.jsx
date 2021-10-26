import React from "react";

import icon1 from "../../../assets/images/dataIcons/icon1.svg";
import icon2 from "../../../assets/images/dataIcons/icon3.svg";
import icon3 from "../../../assets/images/dataIcons/icon2.svg";
import icon4 from "../../../assets/images/dataIcons/icon4.svg";


import "./buddiiData.scss";

function BuddiiData() {

    return (
        <>
            <section className="buddiiData">
                <div className="buddiiData_intro">
                    <h1 className="buddiiData_title">Buddii gives you data</h1>
                    <p className="buddiiData_text">With our super powers we have reached this</p>
                </div>
                <div className="buddiiData_items">
                    <div className="buddiiData_grid">
                        <div className="buddiiData_item">
                            <img className="buddiiData_item_img" src={icon1} alt="" />
                            <div className="buddiiData_item_textbox">
                                <p className="buddiiData_item_titel">10.000+</p>
                                <p className="buddiiData_item_text">Downloads per day</p>
                            </div>
                        </div>
                        <div className="buddiiData_item">
                            <img className="buddiiData_item_img" src={icon3} alt="" />
                            <div className="buddiiData_item_textbox">
                                <p className="buddiiData_item_titel">2 milion</p>
                                <p className="buddiiData_item_text">users</p>
                            </div>
                        </div>
                        <div className="buddiiData_item">
                            <img className="buddiiData_item_img" src={icon2} alt="" />
                            <div className="buddiiData_item_textbox">
                                <p className="buddiiData_item_titel">500+</p>
                                <p className="buddiiData_item_text">Clients</p>
                            </div>
                        </div>
                        <div className="buddiiData_item">
                            <img className="buddiiData_item_img" src={icon4} alt="" />
                            <div className="buddiiData_item_textbox">
                                <p className="buddiiData_item_titel">140</p>
                                <p className="buddiiData_item_text">Countries</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default BuddiiData;
