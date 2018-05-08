import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { UsersList } from '../components';
import { API_URL } from '../constants';

jest.mock('../services/getUsers'); // jest will look at __mocks__ folder

describe('<UsersList />', () => {
  it('should be defined', () => {
    expect(UsersList).toBeDefined();
  });

  it('should render correctly', () => {
    const output = ReactTestRenderer.create(<UsersList />).toJSON();
    expect(output).toMatchSnapshot();
  });

  it('fetchers an array of users and renders them on a list', (done) => {
    const output = shallow(<UsersList />);

    setTimeout(() => {
      output.update(); //rerender component

      const state = output.instance().state;
      expect(state.users.length).toEqual(3); // we only have 3 on the mock test
      expect(output.find('li').length).toEqual(3);

      done();
    });
  });
});
