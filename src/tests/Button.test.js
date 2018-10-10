import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import { Button } from '../components';

describe('<Button />', () => {
  const mockFunction = jest.fn();
  let output;

  beforeEach(() => {
      output = shallow(<Button name="test" handleClick={mockFunction} />);
  });

  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  // .prop(key) only returns values for props that exist in the root node
  it('should render button name correctly', () => {
    expect(typeof(output.prop('name'))).toBe('string');
    expect(output.prop('name')).toEqual('test');
  });

  it('should have the correct classNames', () => {
    expect(output.find('button').hasClass('btn')).toEqual(true);
    expect(output.find('button').hasClass('btn-primary')).toEqual(true);
  });

  it('should call mockFunction when clicked', () => {
    output.simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });

  it('should render correctly', () => {
    const render = ReactTestRenderer.create(<Button name="test" />).toJSON();
    expect(render).toMatchSnapshot();
  });
});
