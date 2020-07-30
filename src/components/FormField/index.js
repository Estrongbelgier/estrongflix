import React from "react";
import "styled-components";
import { Input } from "@rocketseat/unform";

function FormField({ classType, label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        <Input
          className={classType}
          placeholder={label}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FormField;
