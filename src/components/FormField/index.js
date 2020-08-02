import React from "react";
import { PropTypes } from "prop-types";
import { Container, Label, Input } from "./styles";

function FormField({ id, type, label, read, value, onChange, suggestions }) {
  const isTypeTextarea = type === "textarea";
  const tag = isTypeTextarea ? "textarea" : "input";

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <Container>
      <Label htmlFor={id}>
        <Input
          as={tag}
          hasValue={hasValue}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={hasSuggestions ? "off" : "on"}
          list={hasSuggestions ? `suggestionFor_${id}` : undefined}
        />
        <Label.Text>{label}</Label.Text>
        {hasSuggestions && (
          <datalist id={`suggestionFor_${id}`}>
            {suggestions.map((suggestion) => (
              <option
                value={suggestion}
                key={`suggestionFor_${id}_option${suggestion}`}
              >
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </Container>
  );
}

FormField.defaultProps = {
  type: "text",
  value: "",
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
