import React, { Component } from 'react';
import { Button } from './Button';

const doIncrement = (prevState) => ({
  counter: prevState.counter + 1
});

const doDecrement = (prevState) => ({
  counter: prevState.counter - 1
});

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState(doIncrement);
  }

  onDecrement() {
    this.setState(doDecrement);
  }

  render() {
    return (
      <div>
        <h3>Counter Component</h3>
        <p>{this.state.counter}</p>
        <Button handleClick={this.onIncrement} name="Increment" />
        <Button handleClick={this.onDecrement} name="Decrement" />
      </div>
    );
  }
}

export { Counter, doIncrement, doDecrement };
