import React, { useState } from "react";

const InputText = ({ placeholder, type, step, min, max }) => {

  const [state, setState] = useState({ inputVal: '' });
  const handleChange = (e) => {
    const inputVal = (e.target.validity.valid) ? e.target.value : state.inputVal;
    setState({ inputVal });
  }
  const clearInput = () => {
    setState({ inputVal: '' });
  }
  return (
    <>
    <input
      className="form-control"
      type={type}
      placeholder={placeholder}
      value={state.inputVal}
      onInput={handleChange}
      step={step}
      min={min}
      max={max}
    />
    <input type="button" value="clear" disabled={!state.inputVal} onClick={clearInput} />
  </>
  );
 
};

export default InputText;
