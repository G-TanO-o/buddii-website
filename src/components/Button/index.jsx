import React from "react";

import "./button.scss";

function Button({ text, to, styling, arrowColor }) {
  return (
    <>
      <a className={`button ${styling}`} href={to} >{text}
        {/* <img src={arrowRight} /> */}

        <svg className={`arrowRight  ${arrowColor}`} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.9806 6.70711C15.5901 6.31658 15.5901 5.68342 15.9806 5.29289C16.3712 4.90237 17.0043 4.90237 17.3949 5.29289L23.3948 11.2929C23.7854 11.6834 23.7854 12.3166 23.3948 12.7071L17.3949 18.7071C17.0043 19.0976 16.3712 19.0976 15.9806 18.7071C15.5901 18.3166 15.5901 17.6834 15.9806 17.2929L20.2735 13H2.69853C2.14015 13 1.6875 12.5523 1.6875 12C1.6875 11.4477 2.14015 11 2.69853 11H20.2735L15.9806 6.70711Z" fill="currentColor" />
        </svg>

      </a>
    </>
  );
}

export default Button;
