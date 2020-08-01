import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageRoot from "../../components/PageRoot";
import FormField from "../../components/FormField";
import "./styles.css";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute("name"),
      infosDoEvento.target.value
    );
  }

  useEffect(() => {
    if (window.location.href.includes("localhost")) {
      const URL = "http://localhost:8080/categorias";
      fetch(URL).then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error("Não foi possível pegar os dados");
      });
    }
  }, []);

  return (
    <PageRoot>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, values]);

          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <input
          className="colorButton"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <button className="sumitButton">Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageRoot>
  );
}

export default CadastroCategoria;
