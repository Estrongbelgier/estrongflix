import styled from "styled-components";

export const FooterBase = styled.footer`
  img {
    width: 100px;
  }
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  height: 100px;
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
