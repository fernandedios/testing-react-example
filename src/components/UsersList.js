import React, { Component } from 'react';
import axios from 'axios';

import { API_URL } from '../constants';

class UsersList extends Component {
  constructor(props) {
    super(props);
     this.state = { users: [] };
  }

  componentWillMount() {
    axios.get(`${API_URL}/users`)
      .then((response) => {
        const users = response.data;
        this.setState({ users });
      })
      .catch(err => console.log(err));
  }

  renderList() {
    if (this.state.users.length === 0) {
      return <div className="loading">Loading...</div>
    }

    const lis = this.state.users.map(({ id, name }) => {
      return <li key={id}>{name}</li>;
    });

    return (
      <ul>
        {lis}
      </ul>
    );
  }

  render() {
    return this.renderList();
  }
}

export { UsersList };
