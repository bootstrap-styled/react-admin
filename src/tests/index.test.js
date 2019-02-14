/**
 * Testing example
 */

import { shallow } from 'enzyme';
import React from 'react';
import ReactDemo from '../index';

const renderComponent = (props = {}) => shallow(<ReactDemo {...props} />);

describe('<ReactDemo />', () => {
  it('should render an <ReactDemo /> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
