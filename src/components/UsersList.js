import React, { Component } from 'react';
import getUsers from '../services/getUsers';

class UsersList extends Component {
  constructor(props) {
    super(props);
     this.state = { users: [] };
  }

  async componentWillMount() {
    try {
      const users = await getUsers();
      this.setState({ users });
    }
    catch(err) {
      // console.log(err);
    }
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
