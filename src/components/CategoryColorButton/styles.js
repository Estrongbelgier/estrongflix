import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 4px;
  }
`;

export const Label = styled.label``;

Label.Text = styled.span`
  color: #e5e5e5;
  position: absolute;
  top: 0;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

export const Input = styled.input`
  background: none;
  border-radius: 50px;
  transition: 0.8s;

  background: #53585d;
  color: #f5f5f5;
  display: block;
  cursor: pointer;
  width: 10%;
  height: 20px;

  margin-bottom: 45px;
  transition: 0.3s;

  &:hover {
    color: aliceblue;
    border: 1px solid #ff8a65;
  }
`;
