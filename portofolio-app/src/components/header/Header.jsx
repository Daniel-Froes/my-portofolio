import React from "react";

import "./header.css";

//imports
import CTA from "./CTA";
import ME from "../../assets/lorem2.png"
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (

    <header>
        <div className="container header__container">
          <h5>Olá eu sou</h5>
          <h1>Daniel Froes</h1>
          <h5 className="text-light">Desenvolvedor Front-End</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">
            <img src={ME} alt="me"></img>
          </div>


          <a href="#contact" className="scroll__down">Rolar para baixo</a>
        </div>
    </header>

  )

};

export default Header;
