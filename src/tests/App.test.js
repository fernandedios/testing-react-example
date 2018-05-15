import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders the React logo image', () => {
    const app = shallow(<App />);
    expect(app.find('img.App-logo').length).toEqual(1);
  });

  it('renders h1 welcome message', () => {
    const app = shallow(<App />);
    expect(app.find('h1.App-title').text()).toEqual('Welcome to React');
  });

  it('renders button component', () => {
    const app = mount(<App />);
    expect(app.find('button.btn').length).toEqual(4);
  });
});
