import React from 'react';

const TextInput = ({ type, name, ...others }) => {
  return <input {...others} name={name} id={name} type={type} className="form-control" />;
};

TextInput.defaultProps = { type: 'text' };

export { TextInput };
