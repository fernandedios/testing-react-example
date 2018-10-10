import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import { Checkbox } from '../components';

describe('<Checkbox />', () => {
  let output;

  beforeEach(() => {
      output = shallow(<Checkbox labelOn="On" labelOff="Off" />);
  });

  it('should be defined', () => {
    expect(Checkbox).toBeDefined();
  });

  it('should have the correct className', () => {
    expect(output.find('input').hasClass('form-control')).toEqual(true);
  });

  it('should change label text when clicked', () => {
    expect(output.text()).toEqual('Off');
    output.find('input').simulate('change');
    expect(output.text()).toEqual('On');
  });

  it('should render correctly', () => {
    const render = ReactTestRenderer.create(<Checkbox labelOn="On" labelOff="Off" />).toJSON();
    expect(render).toMatchSnapshot();
  });
});
