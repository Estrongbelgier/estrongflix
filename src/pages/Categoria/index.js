import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SubPageRoot from "../../components/SubPageRoot";
import FormField from "../../components/FormField";
import CategoryColorButton from "../../components/CategoryColorButton";
import Categoria from "../../repositories/categorias";
import useForm from "../../hooks/useForm";
import { toast, ToastContainer } from "react-toastify";

import "./styles.css";

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: "",
    descricao: "",
    cor: "",
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  async function onSubmitHandler(event) {
    event.preventDefault();
    setCategorias([...categorias, values]);

    await Categoria.insert(values)
      .then((resposta) => {
        clearForm(valoresIniciais);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes("localhost")
      ? "http://localhost:8080/categorias"
      : "https://devsoutinhoflix.herokuapp.com/categorias";
    fetch(URL_TOP).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([...resposta]);
    });
  }, []);

  return (
    <SubPageRoot>
      <h1>Cadastro de Categoria: {values.titulo}</h1>

      <form onSubmit={onSubmitHandler}>
        <FormField
          id="titulo"
          label="Título da categoria"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          id="descricao"
          label="Descrição"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        />
        <h4>Escolha a cor! </h4>

        <CategoryColorButton
          id="cor"
          type="color"
          label=""
          value={values.cor}
          onChange={handleChange}
        />

        <button className="sumitButton">Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.id}`}>{categoria.titulo}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </SubPageRoot>
  );
}

export default CadastroCategoria;
