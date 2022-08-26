import React from "react";
import InputField from "../InputText";

const FloatInput = () => {
  return (
    <>
      <span>Input for float numbers (1.234, -0.3).</span>
      <InputField type="number" step="0.1" min='-0.3' max='1.234' />
    </>
  );
};

export default FloatInput;
