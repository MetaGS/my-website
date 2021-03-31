import { useState } from "react";

const useFormInput = (initialState) => {
  const [value, setValue] = useState(initialState);

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  const clear = () => {
    setValue("");
  };

  return { value, onChange, clear };
};

export default useFormInput;
