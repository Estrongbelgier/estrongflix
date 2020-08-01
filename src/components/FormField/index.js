import React from "react";
import { PropTypes } from "prop-types";
import { Container, Label, Input, ColorButton } from "./styles";

function FormField({ label, type, name, value, onChange }) {
  const isTypeTextArea = type === "textarea";
  const tag = isTypeTextArea ? "textarea" : "input";

  return (
    <Container>
      <Label>
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
        <Label.Text>{label}</Label.Text>
      </Label>
    </Container>
  );
}
FormField.defaultProps = {
  type: "text",
  value: "",
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
