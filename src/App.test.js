import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

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
});
