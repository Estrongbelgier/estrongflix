import React from "react";
import Logo from "../../assets/Logo.png";
import { MenuContainer, LogoContainer } from "./styles";

import Button from "../Button";

function Menu() {
  return (
    <MenuContainer>
      <a href="/">
        <LogoContainer src={Logo} alt="" srcset="" />
      </a>
      <Button />
    </MenuContainer>
  );
}

export default Menu;
