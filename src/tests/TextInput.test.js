import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import { TextInput } from '../components';

describe('<TextInput />', () => {
  it('should be defined', () => {
    expect(TextInput).toBeDefined();
  });

  it('should have the correct classNames', () => {
    const output = shallow(<TextInput name="test" />);
    expect(output.find('input').hasClass('form-control')).toEqual(true);
  });

  it('should render input field correctly', () => {
    const output = mount(<TextInput name="test" placeholder="test placeholder" />);
    expect(typeof(output.prop('name'))).toBe('string');
    expect(output.prop('name')).toEqual('test');

    expect(output.find('input').prop('placeholder')).toEqual('test placeholder');
    expect(output.find('input').prop('type')).toEqual('text');
  });

  it('should render correctly', () => {
    const output = ReactTestRenderer.create(<TextInput name="test" />).toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should call mockFunction onChange', () => {
    const mockFunction = jest.fn();
    const output = shallow(<TextInput name="test" onChange={mockFunction} />);
    output.simulate('change');
    expect(mockFunction).toHaveBeenCalled();
  });
});
