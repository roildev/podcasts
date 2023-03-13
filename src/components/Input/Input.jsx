import React, { memo } from 'react';

import './Input.css';

function Input({ onChange, ...props }) {
  const handleOnChange = ({ target: { value } }) => {
    onChange(value);
  };

  return (
    <input onChange={handleOnChange} className="input" type="text" {...props} />
  );
}

export default memo(Input);
