import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { Button, Checkbox, Greeter, UsersList, LoginForm, Counter } from './components';
import WithConditional from './hocs/WithConditional';

class App extends Component {
  render() {
    const ConditionalComponent = WithConditional(Greeter);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <ConditionalComponent condition={true} />
        </header>
        <p><Button id="example-button" name="Example Button" /> <Checkbox labelOn="On" labelOff="Off" /></p>
        <UsersList />
        <div>
          <LoginForm />
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
