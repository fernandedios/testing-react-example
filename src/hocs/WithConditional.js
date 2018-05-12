import React from 'react';

const WithConditional = (Component) => {
  return ({ condition, ...others }) => {
    if (condition) {
      return <Component {...others} />;
    }
    return null;
  }
};

export default WithConditional;
