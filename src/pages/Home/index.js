import React, { useEffect, useState } from "react";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import categoriasRepository from "../../repositories/categorias";
import PageRoot from "../../components/PageRoot";
import Loading from "../../components/Loading";
import { Container } from "./styles";
function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageRoot paddingAll={0}>
      {dadosIniciais.length === 0 ? (
        <Container>
          <Loading type="cylon" color="#ff8a65" />
        </Container>
      ) : (
        dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={dadosIniciais[0].videos[0].description}
                />
                <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
              </div>
            );
          }

          return <Carousel key={categoria.id} category={categoria} />;
        })
      )}
    </PageRoot>
  );
}

export default Home;
