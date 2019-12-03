// import { shallow } from 'enzyme';
// import React from 'react';
// import AdminRouter from '../Admin';
//
// const renderComponent = (props = {}) => shallow(<AdminRouter {...props} />);
//
// describe('<AdminRouter />', () => {
//   it('should render an <AdminRouter /> tag', () => {
//     const renderedComponent = renderComponent();
//     expect(renderedComponent.length).toBe(1);
//   });
// });
const exported = require('../index');

describe('exported', () => {
  Object.keys(exported).forEach((key) => {
    it(`${key} should be exported`, () => {
      expect(exported[key]).toBeDefined();
    });
  });
  it('Admin should be exported', () => {
    expect(exported.Admin).toBeDefined();
  });
  it('AdminRouter should be exported', () => {
    expect(exported.AdminRouter).toBeDefined();
  });
});
