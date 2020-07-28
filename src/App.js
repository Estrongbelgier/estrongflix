import React from "react";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";

import data from "./data/db.json";

function App() {
  return (
    <>
      <Menu />
      <BannerMain
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
        videoDescription={""}
      />
      <Carousel ignoreFirstVideo category={data.categorias[0]} />
      <Footer />
    </>
  );
}

export default App;
