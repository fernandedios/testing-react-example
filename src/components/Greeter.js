import React from 'react';

const Greeter = ({ name, greetings }) => {
  return <div id="greetings">{`${greetings} ${name}!`}</div>;
};

Greeter.defaultProps = {
  name: 'John',
  greetings: 'Hello'
};

export { Greeter };
