import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import { setup } from './utils';
import { LoginForm } from '../components';

let output;
beforeEach(() => {
    output = setup(LoginForm, 'mount');
});

describe('<LoginForm />', () => {
  it('should be defined', () => {
    expect(LoginForm).toBeDefined();
  });

  it('should have the correct className', () => {
    expect(output.find('form').hasClass('login-form')).toEqual(true);
  });

  it('should render input fields correctly', () => {
    expect(output.find('#email').length).toEqual(1);
    expect(output.find('#password').length).toEqual(1);
  });

  it('should render correctly', () => {
    const render = ReactTestRenderer.create(<LoginForm />).toJSON();
    expect(render).toMatchSnapshot();
  });
});

describe('Email Input Field', () => {
  it('should be a controlled component and responds to state changes', () => {
    const email = 'fernan@test.com';
    output.find('#email').simulate('change',{
        target: { name: 'email', value: email }
      });

    expect(output.state('email')).toEqual(email);
  });
});

describe('Password Input Field', () => {
  it('should be a controlled component and responds to state changes', () => {
    const pass = '123password';

    output.find('#password').simulate('change',{
        target: { name: 'password', value: pass }
      });

    expect(output.state('password')).toEqual(pass);
  });
});
