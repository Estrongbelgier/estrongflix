import React from "react";
import { PropTypes } from "prop-types";
import { Container, Label, Input } from "./styles";

function CategoryColorButton({ id, type, label, value, onChange }) {
  return (
    <Container>
      <Label htmlFor={id}>
        <Input id={id} type={type} value={value} onChange={onChange} />
      </Label>
    </Container>
  );
}

CategoryColorButton.defaultProps = {
  type: "text",
  value: "",
  onChange: () => {},
  suggestions: [],
};

CategoryColorButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default CategoryColorButton;
