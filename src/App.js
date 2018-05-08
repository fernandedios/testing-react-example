import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { Button, Checkbox, UsersList } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p><Button name="Example Button" /> <Checkbox labelOn="On" labelOff="Off" /></p>
        <div>
          <UsersList />
        </div>
      </div>
    );
  }
}

export default App;
