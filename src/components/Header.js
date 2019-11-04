import React from 'react';
import{ Link } from "react-router-dom";
import Logo from "../logo.svg"

function Header() {
  return(
    <header>
      <span id="getNid"></span>
      <div className="container">
        <div className="logo App-logo">
          <Link to="/"><img src={Logo} alt="logo" /></Link>
        </div>
      </div>
    </header>
  )
}

export default Header;