import { shallow } from 'enzyme';
import React from 'react';
import AdminRouter from '../Admin';

const renderComponent = (props = {}) => shallow(<AdminRouter {...props} />);

describe('<AdminRouter />', () => {
  it('should render an <AdminRouter /> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
