import React from "react";
import { Link } from "react-router-dom";
import PageRoot from "../../components/PageRoot";
// import { Container } from './styles';

function Categoria() {
  return (
    <>
      <PageRoot>
        <h1>Cadastro de Categorias</h1>
        <Link to="/">Home</Link>
      </PageRoot>
    </>
  );
}

export default Categoria;
