import React from "react";
import SubMenu from "../SubMenu";
import Footer from "../Footer";
import { Main } from "./styles";

function SubPageRoot({ children, paddingAll }) {
  return (
    <>
      <SubMenu />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
}

export default SubPageRoot;
