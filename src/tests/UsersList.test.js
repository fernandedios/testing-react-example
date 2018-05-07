import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { UsersList } from '../components';
import { API_URL } from '../constants';

describe('<UsersList />', () => {
  it('should be defined', () => {
    expect(UsersList).toBeDefined();
  });

  it('should render correctly', () => {
    const output = ReactTestRenderer.create(<UsersList />).toJSON();
    expect(output).toMatchSnapshot();
  });
});
