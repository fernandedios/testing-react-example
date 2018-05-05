import React from 'react';

const Button = ({ name, handleClick }) => {
  return (
    <button name={name} onClick={handleClick} className="btn btn-primary">{name}</button>
  );
}

export { Button };
