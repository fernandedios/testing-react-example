import React from 'react';

const Button = ({ name, handleClick, ...others }) => {
  return (
    <button {...others} name={name} onClick={handleClick} className="btn btn-primary">{name}</button>
  );
}

export { Button };
