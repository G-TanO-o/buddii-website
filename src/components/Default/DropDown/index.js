import React from "react";
import Dropdown from 'react-dropdown';

import "./Dropdown.scss";

function DropDown({options, onChange, value, placeholder, className}) {
  const divStyle = {
    background: 'red'
  };

  return (
    <div>
      <Dropdown className={`dropdown${className}`} options={options} onChange={onChange} value={value} placeholder={placeholder}/>
    </div>
  );
}

export default DropDown;
