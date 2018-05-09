import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { username: '', password: '' };
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
        <input type="text" name="email" id="email" onChange={this.onChange} />
        <label>Password: </label>
        <input type="password" name="password" id="password" onChange={this.onChange} />
        <button>Submit</button>
      </form>
    )
  }
}

export { LoginForm };
