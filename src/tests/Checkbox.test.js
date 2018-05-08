import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import { Checkbox } from '../components';

describe('<Checkbox />', () => {

  it('should be defined', () => {
    expect(Checkbox).toBeDefined();
  });

  it('should have the correct className', () => {
    const output = shallow(<Checkbox labelOn="On" labelOff="Off" />);
    expect(output.find('input').hasClass('form-control')).toEqual(true);
  });

  it('should render correctly', () => {
    const output = ReactTestRenderer.create(<Checkbox labelOn="On" labelOff="Off" />).toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should change label text when clicked', () => {
    const output = shallow(<Checkbox labelOn="On" labelOff="Off" />);
    expect(output.text()).toEqual('Off');
    output.find('input').simulate('change');
    expect(output.text()).toEqual('On');
  });
});
