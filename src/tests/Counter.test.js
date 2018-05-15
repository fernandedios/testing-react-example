import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import { Counter } from '../components';

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

  it('should increment counter number when increment button is clicked', () => {
    const output = shallow(<Counter />);
    output.setState({ counter: 0 });
    output.find('button').at(0).simulate('click');
    expect(output.state().counter).toEqual(1);
  });

  it('should decrement counter number when decrement button is clicked', () => {
    const output = shallow(<Counter />);
    output.setState({ counter: 0 });
    output.find('button').at(1).simulate('click');
    expect(output.state().counter).toEqual(-1);
  });

  it('should render correctly', () => {
    const output = ReactTestRenderer.create(<Counter />).toJSON();
    expect(output).toMatchSnapshot();
  });
});
