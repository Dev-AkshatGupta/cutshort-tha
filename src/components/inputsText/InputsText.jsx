import React from "react";
import "./inputsText.css";
const InputsText = ({ state, setState, value, placeHolder ,label }) => {
  return (
    <label className="input-label">
        {label}
      <input
        type="text"
        value={state[value]}
        onChange={(e) =>
          setState((prev) => ({ ...prev, [value]: e.target.value }))
        }
        placeholder={placeHolder}
        className="input-text"
      />
    </label>
  );
};

export { InputsText };
