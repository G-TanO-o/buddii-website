import React from "react";

import make from "../../../assets/images/powerpoint/make.svg";
import components from "../../../assets/images/powerpoint/components.svg";
import flexibility from "../../../assets/images/powerpoint/flexibility.svg";
import layout from "../../../assets/images/powerpoint/layout.svg";
import organised from "../../../assets/images/powerpoint/organised.svg";
import user from "../../../assets/images/powerpoint/user.svg";

import "./powerpoint.scss";

function Powerpoint() {

    return (
        <>
            <section className="powerpoints">
                <article>
                    <div className="powerpoints_intro">
                        <h1 className="powerpoints_titel">Interactieve powerpoints</h1>
                        <p className="powerpoints_text">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                    </div>
                </article>
                <article className="powerpoint_grid">
                    <div className="powerpoint_item">
                        <img src={make} alt="make" />
                        <p className="item_titel">Make your PDF smart</p>
                        <p className="item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                    </div>
                    <div className="powerpoint_item">
                        <img src={flexibility} alt="flexibility" />
                        <p className="item_titel">Flexibility</p>
                        <p className="item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                    </div>
                    <div className="powerpoint_item">
                        <img src={user} alt="user" />
                        <p className="item_titel">User friendly</p>
                        <p className="item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                    </div>
                    <div className="powerpoint_item">
                        <img src={layout} alt="layout" />
                        <p className="item_titel">Multiple layouts</p>
                        <p className="item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                    </div>
                    <div className="powerpoint_item">
                        <img src={components} alt="components" />
                        <p className="item_titel">Better components</p>
                        <p className="item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                    </div>
                    <div className="powerpoint_item">
                        <img src={organised} alt="organised" />
                        <p className="item_titel">Well organised</p>
                        <p className="item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                    </div>
                </article>
            </section>
        </>
    );
}

export default Powerpoint;
