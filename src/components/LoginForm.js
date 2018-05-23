import React, { Component } from 'react';
import { TextInput } from './TextInput';
import { Button } from './Button';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form className="login-form">
        <label>Username: </label>
        <TextInput name="email" onChange={this.onChange} />
        <label>Password: </label>
        <TextInput type="password" name="password" onChange={this.onChange} />
        <Button id="login-button" name="Submit" />
      </form>
    )
  }
}

export { LoginForm };
