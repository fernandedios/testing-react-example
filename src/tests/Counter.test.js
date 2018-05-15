import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import { Counter, doIncrement, doDecrement } from '../components';

describe('<Counter />', () => {
  const mockFunction = jest.fn();

  it('should be defined', () => {
    expect(Counter).toBeDefined();
  });

  it('renders h3 component title', () => {
    const output = shallow(<Counter />);
    expect(output.find('h3').text()).toEqual('Counter Component');
  });

  it('should render counter number initialized to 0', () => {
    const output = shallow(<Counter />);
    expect(output.find('p').text()).toEqual('0');
  });

  it('should render correctly', () => {
    const output = ReactTestRenderer.create(<Counter />).toJSON();
    expect(output).toMatchSnapshot();
  });
});
