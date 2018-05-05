import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

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

  it('should have the correct classNames', () => {
    const output = shallow(<Button name="test" />);

    expect(output.find('button').hasClass('btn')).toEqual(true);
    expect(output.find('button').hasClass('btn-primary')).toEqual(true);
  });

  it('should call mockFunction when clicked', () => {
    const output = shallow(<Button name="test" handleClick={mockFunction} />);
    output.simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });

  it('should render correctly', () => {
    const output = ReactTestRenderer.create(<Button name="test" />).toJSON();
    expect(output).toMatchSnapshot();
  });
});
