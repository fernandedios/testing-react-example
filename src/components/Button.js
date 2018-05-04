import React from 'react';

const Button = ({ name, handleClick }) => {
  return (
    <input name={name} value={name} onClick={handleClick} className="btn btn-primary" />
  );
}

export { Button };
