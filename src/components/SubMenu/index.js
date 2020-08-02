import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import ArrowLeft from "../ArrowLeft";
import "./styles.css";

function SubMenu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Estrongflix logo" />
      </Link>
      <ArrowLeft />
    </nav>
  );
}

export default SubMenu;
