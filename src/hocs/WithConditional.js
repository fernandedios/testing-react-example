import React from 'react';

const WithConditional = (Component) => {
  function withConditionalComponent({ condition, ...others }) {
    if (condition) {
      return <Component {...others} />;
    }
    return null;
  }
};

export default WithConditional;
