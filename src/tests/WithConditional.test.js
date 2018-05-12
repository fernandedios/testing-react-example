import React from 'react';
import { shallow } from 'enzyme';

import { Greeter } from '../components';
import WithConditional from '../hocs/WithConditional';

describe('<WithConditional />', () => {
  it('should be defined', () => {
    expect(WithConditional).toBeDefined();
  });

  it('should only render if condition evaluates to true', () => {
    const ConditionalComponent = WithConditional(Greeter);
    const output = shallow(<ConditionalComponent condition={true} />);
    expect(output.html()).not.toBe(null);
  });
});
