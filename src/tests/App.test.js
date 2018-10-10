import React from 'react';
import { setup } from './utils';
import App from '../App';

describe('<App />', () => {
  let app;
  beforeEach(() => {
      app = setup(App, 'shallow');
  });

  it('renders without crashing', () => {});

  it('renders the React logo image', () => {
    expect(app.find('img.App-logo').length).toEqual(1);
  });

  it('renders h1 welcome message', () => {
    expect(app.find('h1.App-title').text()).toEqual('Welcome to React');
  });
});
