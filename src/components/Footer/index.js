import React from "react";
import { FooterBase } from "./styles";
import Logo from "../../assets/Logo.png";

function Footer() {
  return (
    <FooterBase>
      <a href="http://www.estrongbelgir.tech/">
        <img src={Logo} alt="Logo EstrongFlix" />
      </a>
      <p>
        Todos os direitos reservados!{" "}
        <a target="blanck" href="http://www.estrongbelgier.tech">
          Estrongbelgier Softwares
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
