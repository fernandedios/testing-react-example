import React from 'react';

const TextInput = (props) => {
  const { type, name, ...others } = props;
  return <input {...others} id={name} type={type || 'text'} className="form-control" />;
};

export { TextInput };
