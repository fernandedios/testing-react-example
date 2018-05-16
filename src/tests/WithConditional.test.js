import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

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

  it('should NOT render if condition evaluates to false', () => {
    const ConditionalComponent = WithConditional(Greeter);
    const output = shallow(<ConditionalComponent condition={false} />);
    expect(output.html()).toBe(null);
  });

  it('should pass through additional props', () => {
    const name = 'Fernan';
    const greeting = 'Hiya';
    const ConditionalComponent = WithConditional(Greeter);
    const output = shallow(<ConditionalComponent greetings={greeting} name={name} condition={true} />);
    expect(output.html()).toEqual(`<div id="greetings">${greeting} ${name}!</div>`);
  });

  it('should render correctly', () => {
    const ConditionalComponent = WithConditional(Greeter);
    const output = ReactTestRenderer.create(<ConditionalComponent condition={true} />).toJSON();
    expect(output).toMatchSnapshot();
  });
});
