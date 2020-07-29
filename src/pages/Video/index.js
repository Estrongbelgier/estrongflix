import React from "react";
import PageRoot from "../../components/PageRoot";
import { Link } from "react-router-dom";
// import { Container } from './styles';

function Video() {
  return (
    <PageRoot>
      <h1>Olá mundo</h1>
      <Link to="Categoria">Cadastro de Categoria</Link>
    </PageRoot>
  );
}

export default Video;
