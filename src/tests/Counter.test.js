import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import { setup } from './utils';
import { Counter } from '../components';

describe('<Counter />', () => {
  const mockFunction = jest.fn();
  let output;
  beforeEach(() => {
      output = setup(Counter, 'shallow');
  });

  it('should be defined', () => {
    expect(Counter).toBeDefined();
  });

  it('renders h3 component title', () => {
    expect(output.find('h3').text()).toEqual('Counter Component');
  });

  it('should render counter number initialized to 0', () => {
    expect(output.find('p').text()).toEqual('0');
  });

  it('should increment counter number when increment button is clicked', () => {
    output.setState({ counter: 0 });
    output.find('button').at(0).simulate('click');
    expect(output.state().counter).toEqual(1);
  });

  it('should decrement counter number when decrement button is clicked', () => {
    output.setState({ counter: 0 });
    output.find('button').at(1).simulate('click');
    expect(output.state().counter).toEqual(-1);
  });

  it('should render correctly', () => {
    const render = ReactTestRenderer.create(<Counter />).toJSON();
    expect(render).toMatchSnapshot();
  });
});
