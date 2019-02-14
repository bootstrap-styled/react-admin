import { shallow } from 'enzyme';
import React from 'react';
import Admin from '../Admin';

const renderComponent = (props = {}) => shallow(<Admin {...props} />);

describe('<Admin />', () => {
  it('should render an <Admin /> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
