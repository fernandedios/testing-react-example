import React from 'react';
import { shallow, mount } from 'enzyme';

export const setup = (Component, type) => {
    return type === 'shallow' ? shallow(<Component />) : mount(<Component />);
};
