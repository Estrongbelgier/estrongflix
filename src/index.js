import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Categoria from "./pages/Categoria";
import Pagina404 from "./pages/Pagina404";

import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/video" component={Video} />
      <Route path="/categoria" component={Categoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

/* TIP Utilizando a lib React Router Dom, 
para podermos fazer o roteamento das paginas 
e transformar nossa aplicação em uma SPA (Single Page Aplication)

exact ajuda para poder resolver de forma eficiente as rotas
*/
