import React from "react";
import InputField from "../InputText";

const IntegerInput = () => {
      return (
            <>
                  <span>Input for integer numbers (10, -4). </span>
                  <InputField type="number" min='-4' max='10' />
            </>
      );
};

export default IntegerInput;