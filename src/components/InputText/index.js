import React, { useState } from "react";

const InputText = ({ placeholder, type, step, min, max }) => {
  const [state, setState] = useState(0);
  const handleChange = event => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setState(value);
  };
  const clearInput = () => {
    setState({ value: '' });
  }
  return (
    <>
    <input
      className="form-control"
      type={type}
      placeholder={placeholder}
      value={state}
      onChange={handleChange}
      step={step}
      min={min}
      max={max}
    />
    <input type="button" value="clear" disabled={!state} onClick={clearInput} />
  </>
  );
 
};

export default InputText;
