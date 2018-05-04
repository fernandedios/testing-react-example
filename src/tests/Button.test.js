import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../components';

describe('<Button />', () => {
  const mockFunction = jest.fn();

  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  // .prop(key) only returns values for props that exist in the root node
  it('should render button name correctly', () => {
    const output = shallow(<Button name="test" />);
    expect(typeof(output.prop('name'))).toBe('string');
    expect(output.prop('name')).toEqual('test');
  });
});
